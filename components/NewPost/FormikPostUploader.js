import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import validUrl from 'valid-url';
import firebase, {db, auth} from "../../firebase";

const PLACEHOLDER_IMG = 'https://thumbs.dreamstime.com/b/placeholder-rgb-color-icon-image-gallery-photo-thumbnail-available-album-digital-media-multimedia-file-visual-content-snapshot-187369540.jpg'

const uploadSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('Image URL is required'),
  caption: Yup.string().max(2200, 'Caption has reached the character limit').required('Caption is required'),
})

const FormikPostUploader = ({navigation}) => {
  const [thumbnailUrl, setThumbnailUrl] = React.useState(PLACEHOLDER_IMG)
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null)

  const getUsername = () => {
    const user = auth.currentUser;
    const unsubscribe = db.collection('users').where('owner_uid', '==', user.uid).limit(1).onSnapshot(snapshot => {
      snapshot.docs.map(doc => {
        setCurrentLoggedInUser({
          username: doc.data().username,
          profilePicture: doc.data().profile_picture,
        })
      })
    })
    return unsubscribe
  }

  useEffect(() => {
    getUsername()
  }, [])


  const uploadPostToFirebase = (imageUrl, caption) => {
    const unsubscribe = db.collection('users').doc(auth.currentUser.email).collection('posts')
      .add({
        imageUrl,
        user: currentLoggedInUser.username,
        profilePicture: currentLoggedInUser.profilePicture,
        caption,
        owner_uid: auth.currentUser.uid,
        owner_email: auth.currentUser.email,
        // owner_username: currentLoggedInUser.username,
        // owner_profile_picture: currentLoggedInUser.profilePicture,
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
        likes_by_users: [],
        comments: [],
      })
      .then(() => {
        navigation.push('HomeScreen')
      })
    return unsubscribe
  }

  return (
    <Formik
      initialValues={{
        caption: '',
        imageUrl: '',
      }}
      onSubmit={(values) => {
        uploadPostToFirebase(values.imageUrl, values.caption)
      }}
      validationSchema={uploadSchema}
      validateOnMount={true}
    >

      {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
        <>
          <View style={styles.form}>
            <Image source={{uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMG}}
                   style={styles.image}/>

            <TextInput
              style={styles.input}
              placeholder='Write a caption...'
              placeholderTextColor='gray'
              multiline={true}
              onChangeText={handleChange('caption')}
              onBlur={handleBlur('caption')}
              value={values.caption}
            />

            <TextInput
              onChange={(e) => {
                setThumbnailUrl(e.nativeEvent.text)
              }}
              style={styles.input}
              placeholder='Enter an image URL...'
              placeholderTextColor='gray'
              onChangeText={handleChange('imageUrl')}
              onBlur={handleBlur('imageUrl')}
              value={values.imageUrl}
            />

            {values.imageUrl.length < 1 || errors.imageUrl &&(
              <Text style={styles.error}>
                {errors.imageUrl}
              </Text>
            )}

            <View style={styles.buttonContainer}>
              <Button onPress={handleSubmit} title="Share" disabled={!isValid}/>
            </View>
          </View>
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create(
  {
    form: {
      marginTop: 20,
      marginHorizontal: 10,
    },
    image: {
      width: 100,
      height: 100,
      borderColor: 'gray',
      borderWidth: 1,
      resizeMode: "cover",
    },

    text: {
      color: 'white',
    },

    input: {
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      marginTop: 15,
      color: 'white',
      fontSize: 20,
    },

    error: {
      fontSize: 15,
      color: 'red',
    },

    buttonContainer: {
      marginTop: 15,
    }
  }
);

export default FormikPostUploader;

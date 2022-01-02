import React from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import validUrl from 'valid-url';

const PLACEHOLDER_IMG = 'https://thumbs.dreamstime.com/b/placeholder-rgb-color-icon-image-gallery-photo-thumbnail-available-album-digital-media-multimedia-file-visual-content-snapshot-187369540.jpg'

const uploadSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('Image URL is required'),
  caption: Yup.string().max(2200, 'Caption has reached the character limit').required('Caption is required'),
})

const FormikPostUploader = ({navigation}) => {
  const [thumbnailUrl, setThumbnailUrl] = React.useState(PLACEHOLDER_IMG)

  return (
    <Formik
      initialValues={{
        caption: '',
        imageUrl: '',
      }}
      onSubmit={(values) => {
        console.log(values)
        navigation.goBack()
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



# Make Your Text Input 

  1. Make *TextInput.js* file (I made it at the same path with app.js and index.js)

     
         import React, { Component } from 'react';
         import { TextInput } from 'react-native';

          export default function UselessTextInput() {
            const [value, onChangeText] = React.useState('This is your own Text Input');

            return (
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
              />
            );
          }


  2. Import `textInput.js` from `app.js`

          import TextInput from './\TextInput';

      ![importInputText](../images/importTextInput.png)

  3. Reload your Android emulator 

      ![reloadTextInput](../images/reloadTextInput.png)

  






    
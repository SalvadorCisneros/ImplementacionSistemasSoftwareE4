import React from 'react';
import {Document, Page, View, Text} from "@react-pdf/renderer"





export default function  PDF() {
 




  return (
    
    <Document file="/ficha.pdf">
        <Page size="A4">
            <View>
                <Text>
                    HOLA
                </Text>
            </View>

        </Page>
    </Document>
  );
}

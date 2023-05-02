import React from 'react';
import {Document, Page, View, Text} from "@react-pdf/renderer"
import { useLocation } from 'react-router-dom';




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

import React from 'react';
import { PDFViewer, Font, Document, Page, View, Text, Image, StyleSheet } from "@react-pdf/renderer"
import { useLocation } from 'react-router-dom';

const styles = StyleSheet.create({
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row"
  },
  tableCol: {
    width: "50%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableColt: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10
  },
  maincontainer: {
    backgroundcolor: "#fff",
    borderradius: "10px",
    padding: "20px",
    boxshadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    maxwidth: "80%",
    width: "auto",
    margin: "50px auto",
    maxheight: "80vh",
    overflowy: "auto"
  },
  namecontainer: {
    textalign: "center",
    marginbottom: "20px"
  },
  fotoPerfil: {
    width: "150px",
    height: "150px",

    objectfit: "cover",
    margin: "0 auto",
    display: "block",
  }

});

const PDFDocuments = ({ id, name }) => {
  return (
    <Document>
      <Page>
        <View>
          <Text>{`Row ID: ${id}`}</Text>
          <Text>{`Row Name: ${name}`}</Text>
        </View>
      </Page>
    </Document>
  );
};


Font.register({ family: 'Roboto', src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf' });
Font.register({ family: 'Sofis', src: "https://fonts.gstatic.com/s/cairo/v20/SLXVc1nY6HkvangtZmpcWmhzfH5lWWgsQQ.ttf" });


const PDFDocument = ({ id_usuario, nombre, apellido, edad, telefono, antiguedad, universidad, direccion, estudio, potencial, ano_evaluacion_anual, curva, upward_feedback, promedio_upward_feedback, comentarios_cliente_proveedor, promedio_cliente_proveedor, puntuacion_comentarios, comentarios_feedback, performance, key_talent, encuadre, jefe }) => {


  return (
    
      <Document title= {id_usuario} file="/ficha.pdf">
        <Page size="A4">
          <View>
            <Image id="logo" src={process.env.PUBLIC_URL + '/TX_BIG.png'} alt="Logo" style={{
              width: "150px",
              height: "50px"
            }} />
            <View style={{
              backgroundcolor: "#fff",
              borderradius: "10px",
              padding: "20px",
              boxshadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              maxwidth: "80%",
              width: "auto",
              maxheight: "80vh",
              overflowy: "auto"
            }}>
              <View>
                <Text style={{ display: "flex", margin: "20px auto", fontFamily: "Roboto", fontSize: "30px" }}>Ficha de empleado</Text>
              </View>
              <View style={{ display: "flex" }}>
                <Image id="fotoPerfil" src={process.env.PUBLIC_URL + '/profile-picture.jpg'} alt="Foto de Perfil" style={{
                  width: "130px",
                  height: "130px",
                  objectfit: "cover",
                  margin: "0 auto",
                  display: "block",
                  marginBottom: 30
                }} />
              </View>
              <View>
                <View >
                  <Text style={{ fontFamily: "Sofis", fontSize: "20px" }}>Datos Personales</Text>
                    <View style={styles.table}> 
                    <View style={styles.tableRow}> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>Nombre Completo:</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{nombre} {apellido}</Text> 
                      </View>   
                    </View>
                    <View style={styles.tableRow}> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>Edad:</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{edad}</Text> 
                      </View> 
                    </View> 
                    <View style={styles.tableRow}> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>Antiguedad:</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{antiguedad}</Text> 
                      </View> 
                    </View> 
                    <View style={styles.tableRow}> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>Universidad:</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{universidad}</Text> 
                      </View> 
                    </View> 
                    <View style={styles.tableRow}> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>Direccion:</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{direccion}</Text> 
                      </View> 
                    </View> 
                    <View style={styles.tableRow}> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>Estudios:</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{estudio}</Text> 
                      </View> 
                    </View> 
                    <View style={styles.tableRow}> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>Telefono:</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{telefono}</Text> 
                      </View> 
                    </View> 
                  </View>
                </View>
              </View>

              <View className='opinions-container'>
                <Text style={{ fontFamily: "Sofis", fontSize: "20px" }}>Cliente Proveedor</Text>
                <View className='client-text-container'>

                  <Text style={{ fontSize: "17px", display: "flex", flexDirection:"row" }}> <Text style={{ fontFamily: "Sofis", fontSize: "17px", display: "flex", flexDirection:"row" }}>Año de Evaluacion: </Text>{ano_evaluacion_anual}</Text>
                  <Text style={{ fontSize: "17px", display: "flex", flexDirection:"row" }}> <Text style={{ fontFamily: "Sofis", fontSize: "17px", display: "flex", flexDirection:"row" }}>Performance: </Text>{performance}</Text>
                  <Text style={{ fontSize: "17px", display: "flex", flexDirection:"row" }}> <Text style={{ fontFamily: "Sofis", fontSize: "17px", display: "flex", flexDirection:"row" }}>Curva:</Text> {curva}</Text>
                  <Text style={{ fontSize: "17px", display: "flex", flexDirection:"row" }}> <Text style={{ fontFamily: "Sofis", fontSize: "17px", display: "flex", flexDirection:"row" }}>Opiniones:</Text>  {upward_feedback}</Text>
                  <Text style={{ fontSize: "17px", display: "flex", flexDirection:"row" }}> <Text style={{ fontFamily: "Sofis", fontSize: "17px", display: "flex", flexDirection:"row" }}>Promedio de Opinión:</Text> {promedio_upward_feedback}</Text>
                </View>
                <View style={styles.table}> 
                    <View style={styles.tableRow}> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>Notas</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>Comentarios</Text> 
                      </View>   
                    </View>
                    <View style={styles.tableRow}> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{promedio_cliente_proveedor}</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{comentarios_cliente_proveedor}</Text> 
                      </View> 
                    </View> 
                    <View style={styles.tableRow}> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{puntuacion_comentarios}</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{comentarios_feedback}</Text> 
                      </View> 
                    </View> 
                    </View> 
              </View>

              <View className='job-container'>
                <Text style={{ fontFamily: "Sofis", fontSize: "20px" }}>Trayectoria Laboral</Text>
                <View style={styles.table}> 
                  <View style={styles.tableRow}> 
                    <View style={styles.tableColt}> 
                      <Text style={styles.tableCell}>Performance</Text> 
                    </View> 
                    <View style={styles.tableColt}> 
                      <Text style={styles.tableCell}>Key Talent</Text> 
                    </View> 
                    <View style={styles.tableColt}> 
                      <Text style={styles.tableCell}>Encuadre</Text> 
                    </View> 
                    <View style={styles.tableColt}> 
                      <Text style={styles.tableCell}>Jefe</Text> 
                    </View> 
                  </View>
                  <View style={styles.tableRow}> 
                    <View style={styles.tableColt}> 
                      <Text style={styles.tableCell}>{performance}</Text> 
                    </View> 
                    <View style={styles.tableColt}> 
                      <Text style={styles.tableCell}>{key_talent}</Text> 
                    </View> 
                    <View style={styles.tableColt}>
                      <Text style={styles.tableCell}>{encuadre}</Text> 
                    </View>
                    <View style={styles.tableColt}>
                      <Text style={styles.tableCell}>{jefe}</Text> 
                    </View>
                  </View> 
                </View>
              </View>

              <>
              </>
            </View>
          </View>

        </Page>
      </Document>





  );
}
export default PDFDocument;
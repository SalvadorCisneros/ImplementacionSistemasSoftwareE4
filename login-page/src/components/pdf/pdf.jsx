import React from 'react';
import { PDFViewer, Document, Page, View, Text, Image, StyleSheet } from "@react-pdf/renderer"
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
    width: "33.3%",
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


export default function PDF() {
  const location = useLocation();



  return (
    <PDFViewer width={"650px"} height={"750px"}>
      <Document file="/ficha.pdf">
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
                <Text style={{ display: "flex", margin: "20px auto" }}>Ficha de empleado</Text>
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
                  <Text>Datos Personales</Text>
                    <View style={styles.table}> 
                    <View style={styles.tableRow}> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>Nombre Completo:</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{location.state.nombre} {location.state.apellido}</Text> 
                      </View>   
                    </View>
                    <View style={styles.tableRow}> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>Edad:</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{location.state.edad}</Text> 
                      </View> 
                    </View> 
                    <View style={styles.tableRow}> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>Antiguedad:</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{location.state.antigüedad}</Text> 
                      </View> 
                    </View> 
                    <View style={styles.tableRow}> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>Universidad:</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{location.state.universidad}</Text> 
                      </View> 
                    </View> 
                    <View style={styles.tableRow}> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>Direccion:</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{location.state.direccion}</Text> 
                      </View> 
                    </View> 
                    <View style={styles.tableRow}> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>Estudios:</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{location.state.estudio}</Text> 
                      </View> 
                    </View> 
                    <View style={styles.tableRow}> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>Telefono:</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{location.state.telefono}</Text> 
                      </View> 
                    </View> 
                  </View>
                </View>
              </View>

              <View className='opinions-container'>
                <Text>Cliente Proveedor</Text>
                <View className='client-text-container'>

                  <Text> <Text>Año de Evaluacion: </Text>{location.state.ano_evaluacion_anual}</Text>
                  <Text> <Text>Performance: </Text>{location.state.performance}</Text>
                  <Text> <Text>Curva:</Text> {location.state.curva}</Text>
                  <Text> <Text>Opiniones:</Text>  {location.state.upward_feedback}</Text>
                  <Text> <Text>Promedio de Opinión:</Text> {location.state.promedio_upward_feedback}</Text>
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
                        <Text style={styles.tableCell}>{location.state.promedio_cliente_proveedor}</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{location.state.comentarios_cliente_proveedor}</Text> 
                      </View> 
                    </View> 
                    <View style={styles.tableRow}> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{location.state.puntuacion_comentarios}</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                        <Text style={styles.tableCell}>{location.state.comentarios_feedback}</Text> 
                      </View> 
                    </View> 
                    </View> 
              </View>

              <View className='job-container'>
                <Text>Trayectoria Laboral</Text>
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
                  </View>
                  <View style={styles.tableRow}> 
                    <View style={styles.tableColt}> 
                      <Text style={styles.tableCell}>{location.state.performance}</Text> 
                    </View> 
                    <View style={styles.tableColt}> 
                      <Text style={styles.tableCell}>{location.state.key_talent}</Text> 
                    </View> 
                    <View style={styles.tableColt}>
                      <Text style={styles.tableCell}>{location.state.encuadre}</Text> 
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

    </PDFViewer>




  );
}

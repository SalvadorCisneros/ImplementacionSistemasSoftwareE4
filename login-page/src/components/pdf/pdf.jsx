import React from 'react';
import {PDFDownloadLink, Document, Page, View, Text, Image, StyleSheet} from "@react-pdf/renderer"
import { useLocation } from 'react-router-dom';
import { Button } from "react-bootstrap"

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


export default function  PDF() {
 const location = useLocation();
 const MyDoc = () => (
  <Document file="/ficha.pdf">
          <Page size="A4">
              <View>
              <Image id="logo" src="TX_BIG.png" alt="Logo" style={{width: "150px",
                    height: "50px"}} />
              <View style={{backgroundcolor: "#fff",
                  borderradius: "10px",
                  padding: "20px",
                  boxshadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  maxwidth: "80%",
                  width: "auto",
                  maxheight: "80vh",
                  overflowy: "auto"}}>
                <View>
                  <Text style={{display: "flex", margin: "20px auto"}}>Ficha de empleado</Text>
                </View>
                <View style={{display: "flex"}}>
                  <Image id="fotoPerfil" src="profile-picture.jpg" alt="Foto de Perfil" style={{width: "130px",
                    height: "130px",
                    objectfit: "cover",
                    margin: "0 auto",
                    display: "block",
                    marginBottom: 30}}/>
                    </View>
                  <View>
                  <View >
                    <Text>Datos Personales</Text>
                    <View style={styles.table}> 
                      <View style={styles.tableRow}> 
                        <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>Product</Text> 
                        </View> 
                        <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>Type</Text> 
                        </View> 
                        <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>Period</Text> 
                        </View> 
                        <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>Price</Text> 
                        </View> 
                      </View>
                      <View style={styles.tableRow}> 
                        <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>React-PDF</Text> 
                        </View> 
                        <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>3 User </Text> 
                        </View> 
                        <View style={styles.tableCol}>
                          <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
                        </View>
                        <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>5€</Text> 
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
                          <Text style={styles.tableCell}>Product</Text> 
                        </View> 
                        <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>Type</Text> 
                        </View> 
                        <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>Period</Text> 
                        </View> 
                        <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>Price</Text> 
                        </View> 
                      </View>
                      <View style={styles.tableRow}> 
                        <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>React-PDF</Text> 
                        </View> 
                        <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>3 User </Text> 
                        </View> 
                        <View style={styles.tableCol}>
                          <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
                        </View>
                        <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>5€</Text> 
                        </View> 
                      </View> 
                    </View>
                </View>

                <View className='job-container'>
                  <Text>Trayectoria Laboral</Text>
                  <View style={styles.table}> 
                      <View style={styles.tableRow}> 
                        <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>Product</Text> 
                        </View> 
                        <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>Type</Text> 
                        </View> 
                        <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>Period</Text> 
                        </View> 
                        <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>Price</Text> 
                        </View> 
                      </View>
                      <View style={styles.tableRow}> 
                        <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>React-PDF</Text> 
                        </View> 
                        <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>3 User </Text> 
                        </View> 
                        <View style={styles.tableCol}>
                          <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
                        </View>
                        <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>5€</Text> 
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
 )

 

  return (
    
    <Document file="/ficha.pdf">
        <Page size="A4">
            <View>
            <PDFDownloadLink
              document={<MyDoc />} fileName="xyz.pdf">
              {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
              <Button>Descargar PDF</Button>
            </PDFDownloadLink>
            <div className='main-container'>
              <div className='name-container'>
                <Text>Ficha de empleado</Text>
              </div>
              <div className='second-container'>
                <div className='profile-container'>
                  <img id="fotoPerfil" src="profile-picture.jpg" alt="Foto de Perfil" />
                </div>
                <div className='datos-container'>
                  <h2>Datos Personales</h2>
                  <table>
                    <tbody>
                    <tr>
                        <td>Nombre Completo:</td>
                        <td>{location.state.nombre} {location.state.apellido}</td>
                      </tr>
                      <tr>
                        <td>Edad:</td>
                        <td>{location.state.edad}</td>
                      </tr>
                      <tr>
                        <td>Telefono:</td>
                        <td>{location.state.telefono}</td>
                      </tr>
                      <tr>
                        <td>Estudio:</td>
                        <td>{location.state.estudio}</td>
                      </tr>
                      <tr>
                        <td>Dirección:</td>
                        <td>{location.state.direccion}</td>
                      </tr>
                      <tr>
                        <td>Universidad:</td>
                        <td>{location.state.universidad}</td>
                      </tr>
                    
                        
                    </tbody>
                  </table>
                </div>
              </div>

              <div className='opinions-container'>
                <h2>Cliente Proveedor</h2>
                <div className='client-text-container'>

                <p> <b>Año de Evaluacion: </b>{location.state.ano_evaluacion_anual}</p>
                <p> <b>Performance: </b>{location.state.performance}</p>
                <p> <b>Curva:</b> {location.state.curva}</p>
                <p> <b>Opiniones:</b>  {location.state.upward_feedback}</p>
                <p> <b>Promedio de Opinión:</b> {location.state.promedio_upward_feedback}</p>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Nota</th>
                      <th>Comentarios</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                      <tr>
                        <td>{location.state.promedio_cliente_proveedor}</td>
                        <td>{location.state.comentarios_cliente_proveedor}</td>

                      </tr>
                      <tr>
                        <td>{location.state.puntuacion_comentarios}</td>
                        <td>{location.state.comentarios_feedback}</td>
                      </tr>
                    
                  </tbody>
                </table>
              </div>

              <div className='job-container'>
                <h2>Trayectoria Laboral</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Performance</th>
                      <th>Key Talent</th>
                      <th>Encuadre</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                      <tr>
                        <td>{location.state.performance}</td>
                        <td>{location.state.key_talent}</td>
                        <td>{location.state.encuadre}</td>
                      </tr>
                  
                  </tbody>
                </table>
              </div>

                <>
                </>
            </div>
            </View>

        </Page>
    </Document>
  );
}

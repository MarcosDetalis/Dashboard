import {  useEffect, useState, Fragment } from "react";
import { Page, Text, Document, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",

    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },

  invoiceNoContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "flex-end",
  },
  invoiceDate: {
    fontSize: 10,
    fontStyle: "bold",
    margin: 4,
  },

  label: {
    margin: 4,
    fontSize: 10,
  },
  parameto: {
    margin: 4,
    fontSize: 10,

    letterSpacing: 4,
  },
  fin: {
    borderWidth: 1,
    margin: 4,
    fontSize: 10,
    letterSpacing: 4,
  },
  tableRow2: {
    margin: "auto",
    flexDirection: "row",
    borderWidth: 1,
  },
});

const PDFFile = ({ dato}) => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4005/api/informe", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        id: dato.l,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        setReservas(res);
      });
  }, [ dato]);

  console.log(reservas);
  console.log("op44", dato.l);

 

  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.title}> Informes de Estados </Text>
        <Fragment>
          <View style={styles.invoiceNoContainer}>
            <Text style={styles.parameto}>Parametros </Text>
            <Text style={styles.label}>Estado: </Text>
            <Text style={styles.invoiceDate}>Pendiente </Text>
            <Text style={styles.label}>Carrera: </Text>
            <Text style={styles.invoiceDate}>Informatica </Text>
            <Text style={styles.label}>Fecha Desde: </Text>
            <Text style={styles.invoiceDate}>01/03/2023 </Text>
            <Text style={styles.label}> Fecha Hasta: </Text>
            <Text style={styles.invoiceDate}>01/05/2023 </Text>
          </View>
        </Fragment>

        <View style={styles.table}>
          <View style={styles.tableRow2}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Carrara</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Estado</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Fecha</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Cantidad</Text>
            </View>
          </View>

          {reservas.map((reser) => (
            <View style={styles.tableRow} key={reser.id_reserva}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}> {reser.Alumno} </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}> {reser.Estado} </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}> {reser.Fecha} </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}> {reser.id_reserva} </Text>
              </View>
            </View>
          ))}
          <Text style={styles.fin}>Fin del Informe</Text>
        </View>
      </Page>
    </Document>
  );
};


export default PDFFile;


import {gql} from '@apollo/client'



export const RUTAS = gql`
query buscarRutas($match: String!) {
buscar_rutas(args:{search:$match}){
Id_Ruta
Nombre_Ruta
Descripcion_Ruta
Edad_Maxima
Edad_Minima
Tipo_Vehiculo_1
Tipo_Vehiculo_2
Tipo_Vehiculo_3
Lugar_Salida
Lugar_Paso_1
Lugar_Paso_2
Lugar_Paso_3
Lugar_Paso_4
Lugar_Paso_5
Lugar_Llegada
Edad_Maxima
Edad_Minima
Imagen_Ruta_1
Imagen_Ruta_2
Imagen_Ruta_3
Imagen_Ruta_4
Imagen_Ruta_5
Link_Video_Presentacion_Ruta
}
}

`;

export const TODAS_LAS_RUTAS = gql` 

query {
  RUTA{
    Id_Ruta
    Nombre_Ruta
    Descripcion_Ruta
  }
}
 `
export const BUSCAR_RUTAS_CON_FILTROS = gql `
query BUSCAR_FILTRANDO_RUTAS(
  $Edad_Maxima: Int = 99,
  $Edad_Minima: Int = 18,
  $Match: String,
  $Fecha_Inicio: date = "now()" ,
  $Fecha_Fin: date = "2099-12-27",
  $Idioma_Ruta: IDIOMA_enum,
  $Tipo_Vehiculo: TIPO_VEHICULO_enum 
) {
  RUTA(where: {
 		_and:[   
  {Edad_Maxima:{_lte:$Edad_Maxima}}
  {Edad_Minima:{_gte:$Edad_Minima}}
  {Fecha_Inicio_Ruta:{_gte:$Fecha_Inicio}}
  {Fecha_Final_Ruta:{_lte:$Fecha_Fin}}
  	{_or: [ 
  {Lugar_Salida:{_ilike:$Match}}
	{Lugar_Paso_1:{_ilike:$Match}}
  {Lugar_Paso_2:{_ilike:$Match}}
  {Lugar_Paso_3:{_ilike:$Match}} 
  {Lugar_Paso_4:{_ilike:$Match}}
  {Lugar_Paso_5:{_ilike:$Match}}
  {Lugar_Llegada:{_ilike:$Match}}
  {Nombre_Ruta:{_ilike:$Match}}
  {Descripcion_Ruta:{_ilike:$Match}}]}
		{_or:[
  {Idioma_Ruta:{_eq:$Idioma_Ruta}}
  {Otro_Idioma_Ruta:{_eq:$Idioma_Ruta}}
]}
    {_or:[
  {Tipo_Vehiculo_1:{_eq:$Tipo_Vehiculo}}
  {Tipo_Vehiculo_2:{_eq:$Tipo_Vehiculo}}
  {Tipo_Vehiculo_3:{_eq:$Tipo_Vehiculo}}  
]} 

  ]
  }) {
    Id_Ruta
 Nombre_Ruta
  Descripcion_Ruta
  Edad_Maxima
  Edad_Minima
  Tipo_Vehiculo_1
  Tipo_Vehiculo_2
  Tipo_Vehiculo_3
  Lugar_Salida
  Lugar_Paso_1
  Lugar_Paso_2
  Lugar_Paso_3
  Lugar_Paso_4
  Lugar_Paso_5
  Lugar_Llegada
  Fecha_Inicio_Ruta
  Fecha_Final_Ruta
  Imagen_Ruta_1
  Imagen_Ruta_2
  Imagen_Ruta_3
  Imagen_Ruta_4
  Imagen_Ruta_5
  Link_Video_Presentacion_Ruta
  }
}
`

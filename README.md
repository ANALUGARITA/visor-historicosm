Visor HistoricOSM
=================

Fecha de actualización: 26/04/2014

Visor cartográfico creado en [CartoDB]() para la visualización de datos sobre patrimonio histórico bajo la clave ***historic*** existentes en [OpenStreetMap]().

El siguiente visor es el resultado de un trabajo de análisis de la **información  patrimonial disponible en [OpenStreetMap](www.openstreetmap.org/)** en el ámbito geográfico de España. 

Los datos ha sido obtenidos de OSM utilizando el API de [OverPass]. 

La clave (key) principal bajo la que se editan bienes patrimoniales es [*historic*] y todas sus tag y derivadas.

Para cada uno de los etiquetas relacionadas se ha obtenido un archivo GeoJSON, de los que se han generado tres ficheros según la geometría (punto, línea y área) en formato ESRI shape por cada uno de las etiquetas utilizando la librería [ogr2ogr](http://www.gdal.org/ogr2ogr.html). Con esta librería se han generado finalmente tres únicos ficheros por tipo de geometría realizando una selección básica de atributos, eliminando valores duplicados. 

Con el Sistema de Información Geográfica  [QGIS](http://www.qgis.org/) se ha realizado dos geoproceso más antes de obtener la información definitiva. En primer lugar se han obtenidos los centroides de la capa poligonal y un punto central de las geometrías lineales. Por último, y antes de generar un único fichero shape se ha añadido el nombre del municipio donde se encuentra localizado el punto. Este datos se ha obtenido de la capa de límites administrativos [CGA] y depende lógicamente de las coordenadas del elemento por lo que pueden existir errores en aquellos bienes localizados cerca de fronteras administrativas. También se le ha añadido campos con  las coordenadas geográficas en WGS84. 

Se ha utilizado [CartoDB](http://cartodb.com/) como servicios de almacenamiento y visualización "en la nube". El fondo de cartográficos está almacenado en [MapBox] y basado en estilo modificado de OSM. La [plantilla] con modificaciones mínimas son las facilitadas por CartoDB.

Con algunas modificaciones del código html para la información básica asociada a cada punto se ha añadido un enlace a la entidad en OSM. La información se ha completado con enlaces a búsquedas en Wikipedia y Flick por nombre y municipio.

Pueden descargarse en distintos formatos (geojson, csv, kml, shape) desde este [enlace al conjunto de datos] CartoDB. Los datos generados se rigen bajo la licencia OSM.

##Estadísticas

Total de puntos: 8144

- Puntos
- Centroides de polígonos


###Puntos por *tags*

| **Tag**           | **Total** |
|:--------------------|-------:|
| ruins               | 2284  |
| monument            | 1826  |
| archaeological_site | 1213  |
| castle              | 1082  |
| memorial            | 793   |
| wayside_cross       | 405   |
| wayside_shrine      | 200   |
| boundary_stone      | 178   |
| battlefield         | 53    |
| city_gate           | 37    |
| building            | 17    |
| citywalls           | 16    |
| manor               | 15    |
| fort                | 12    |
| ship                | 5     |
| cannon              | 4     |
| wreck               | 3     |
| tomb                | 1     |


###  Datos según límites administrativos.

De los 8144 puntos, 142 tiene información sobre el municipio al que pertenecen. Este datso depende de la localización del punto en relación al polígono de límites administrativos utilizado para añadir atributos por localzación. 

De igual manera pueden exixtir errores de asignación a un determinado atributo de aquellas localizaciones cercanas a límites administrativos.


| **Provincia**  | **Total** |
|:-----------|------:|
| Las Palmas | 656   |
| Barcelona  | 587   |
| Burgos     | 426   |
| A Coruńa   | 373   |
| Baleares   | 331   |
| Girona     | 264   |
| Madrid     | 262   |
| Murcia     | 251   |
| Cantabria  | 237   |
| Jaén       | 231   |


| **Municipio** | **Total** |
|:----------|------:|
| Madrid    | 130   |
| Cartagena | 127   |
| Burgos    | 126   |
| Córdoba   | 86    |
| Barcelona | 80    |
| Zaragoza  | 58    |
| Cáceres   | 57    |
| Mérida    | 57    |
| Ferrol    | 57    |
| Sevilla   | 55    |




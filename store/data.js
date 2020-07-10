const Departamentos = [
  { departamentoId: 1, paisId: 502, descripcion: "GUATEMALA", usuario_crea: 1 },
  { departamentoId: 4, paisId: 502, descripcion: "EL PROGRESO", usuario_crea: 1 },
  { departamentoId: 2, paisId: 502, descripcion: "SACATEPEQUEZ", usuario_crea: 1 },
  { departamentoId: 3, paisId: 502, descripcion: "CHIMALTENANGO", usuario_crea: 1 },
  { departamentoId: 5, paisId: 502, descripcion: "ESCUINTLA", usuario_crea: 1 },
  { departamentoId: 6, paisId: 502, descripcion: "SANTA ROSA", usuario_crea: 1 },
  { departamentoId: 7, paisId: 502, descripcion: "SOLOLA", usuario_crea: 1 },
  { departamentoId: 8, paisId: 502, descripcion: "TOTONICAPAN", usuario_crea: 1 },
  { departamentoId: 9, paisId: 502, descripcion: "QUETZALTENANGO", usuario_crea: 1 },
  { departamentoId: 10, paisId: 502, descripcion: "SUCHITEPEQUEZ", usuario_crea: 1 },
  { departamentoId: 11, paisId: 502, descripcion: "RETALHULEU", usuario_crea: 1 },
  { departamentoId: 12, paisId: 502, descripcion: "SAN MARCOS", usuario_crea: 1 },
  { departamentoId: 13, paisId: 502, descripcion: "HUEHUETENANGO", usuario_crea: 1 },
  { departamentoId: 14, paisId: 502, descripcion: "EL QUICHE", usuario_crea: 1 },
  { departamentoId: 15, paisId: 502, descripcion: "BAJA VERAPAZ", usuario_crea: 1 },
  { departamentoId: 16, paisId: 502, descripcion: "ALTA VERAPAZ", usuario_crea: 1 },
  { departamentoId: 17, paisId: 502, descripcion: "PETEN", usuario_crea: 1 },
  { departamentoId: 18, paisId: 502, descripcion: "IZABAL", usuario_crea: 1 },
  { departamentoId: 19, paisId: 502, descripcion: "ZACAPA", usuario_crea: 1 },
  { departamentoId: 20, paisId: 502, descripcion: "CHIQUIMULA", usuario_crea: 1 },
  { departamentoId: 21, paisId: 502, descripcion: "JALAPA", usuario_crea: 1 },
  { departamentoId: 22, paisId: 502, descripcion: "JUTIAPA,usuario_crea:1" }
];

const Municipios = [
  { municipioId_depto: 1, departamentoId: 1, descripcion: "GUATEMALA", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 1, descripcion: "SANTA CATARINA PINULA", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 1, descripcion: "SAN JOSE PINULA", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 1, descripcion: "SAN JOSE DEL GOLFO", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 1, descripcion: "PALENCIA", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 1, descripcion: "CHINAUTLA", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 1, descripcion: "SAN PEDRO AYAMPUC", usuario_crea: 1 },
  { municipioId_depto: 8, departamentoId: 1, descripcion: "MIXCO", usuario_crea: 1 },
  { municipioId_depto: 9, departamentoId: 1, descripcion: "SAN PEDRO SACATEPEQUEZ", usuario_crea: 1 },
  { municipioId_depto: 10, departamentoId: 1, descripcion: "SAN JUAN SACATEPEQUEZ", usuario_crea: 1 },
  { municipioId_depto: 10, departamentoId: 6, descripcion: "SANTA MARIA IXHUATAN", usuario_crea: 1 },
  { municipioId_depto: 11, departamentoId: 6, descripcion: "GUAZACAPAN", usuario_crea: 1 },
  { municipioId_depto: 12, departamentoId: 6, descripcion: "SANTA CRUZ NARANJO", usuario_crea: 1 },
  { municipioId_depto: 13, departamentoId: 6, descripcion: "PUEBLO NUEVO VIÑAS", usuario_crea: 1 },
  { municipioId_depto: 14, departamentoId: 6, descripcion: "NUEVA SANTA ROSA", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 7, descripcion: "SOLOLA", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 7, descripcion: "SAN JOSE CHACAYA", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 7, descripcion: "SANTA MARIA VISITACION", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 7, descripcion: "SANTA LUCIA UTATLAN", usuario_crea: 1 },
  { municipioId_depto: 17, departamentoId: 10, descripcion: "SANTO TOMAS LA UNION", usuario_crea: 1 },
  { municipioId_depto: 18, departamentoId: 10, descripcion: "ZUNILITO", usuario_crea: 1 },
  { municipioId_depto: 19, departamentoId: 10, descripcion: "PUEBLO NUEVO", usuario_crea: 1 },
  { municipioId_depto: 20, departamentoId: 10, descripcion: "RIO BRAVO", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 11, descripcion: "RETALHULEU", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 11, descripcion: "SAN SEBASTIAN", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 11, descripcion: "SANTA CRUZ MULUA", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 11, descripcion: "SAN MARTIN ZAPOTITLAN", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 11, descripcion: "SAN FELIPE", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 11, descripcion: "SAN ANDRES VILLA SECA", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 11, descripcion: "CHAMPERICO", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 14, descripcion: "PATZITE", usuario_crea: 1 },
  { municipioId_depto: 8, departamentoId: 14, descripcion: "SAN ANTONIO ILOTENANGO", usuario_crea: 1 },
  { municipioId_depto: 9, departamentoId: 14, descripcion: "SAN PEDRO JOCOPILAS", usuario_crea: 1 },
  { municipioId_depto: 10, departamentoId: 14, descripcion: "CUNEN", usuario_crea: 1 },
  { municipioId_depto: 11, departamentoId: 14, descripcion: "SAN JUAN COTZAL", usuario_crea: 1 },
  { municipioId_depto: 12, departamentoId: 14, descripcion: "JOYABAJ", usuario_crea: 1 },
  { municipioId_depto: 13, departamentoId: 14, descripcion: "NEBAJ", usuario_crea: 1 },
  { municipioId_depto: 14, departamentoId: 14, descripcion: "SAN ANDRES SAJCABAJA", usuario_crea: 1 },
  { municipioId_depto: 15, departamentoId: 14, descripcion: "USPANTAN", usuario_crea: 1 },
  { municipioId_depto: 16, departamentoId: 14, descripcion: "SACAPULAS", usuario_crea: 1 },
  { municipioId_depto: 17, departamentoId: 14, descripcion: "SAN BARTOLOME JOCOTENANGO", usuario_crea: 1 },
  { municipioId_depto: 18, departamentoId: 14, descripcion: "CANILLA", usuario_crea: 1 },
  { municipioId_depto: 19, departamentoId: 14, descripcion: "CHICAMAN", usuario_crea: 1 },
  { municipioId_depto: 17, departamentoId: 1, descripcion: "SAN MIGUEL PETAPA", usuario_crea: 1 },
  { municipioId_depto: 10, departamentoId: 11, descripcion: "INVALIDO", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 20, descripcion: "INVALIDO-OLAPA", usuario_crea: 1 },
  { municipioId_depto: 11, departamentoId: 1, descripcion: "SAN RAYMUNDO", usuario_crea: 1 },
  { municipioId_depto: 12, departamentoId: 1, descripcion: "CHUARANCHO", usuario_crea: 1 },
  { municipioId_depto: 13, departamentoId: 1, descripcion: "FRAIJANES", usuario_crea: 1 },
  { municipioId_depto: 14, departamentoId: 1, descripcion: "AMATITLAN", usuario_crea: 1 },
  { municipioId_depto: 15, departamentoId: 1, descripcion: "VILLA NUEVA", usuario_crea: 1 },
  { municipioId_depto: 16, departamentoId: 1, descripcion: "VILLA CANALES", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 4, descripcion: "GUASTATOYA", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 4, descripcion: "MORAZAN", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 4, descripcion: "SAN AGUSTIN ACASAGUASTLAN", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 4, descripcion: "SAN CRISTOBAL ACASAGUASTLAN", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 4, descripcion: "EL JICARO", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 4, descripcion: "SANSARE", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 4, descripcion: "SANARATE", usuario_crea: 1 },
  { municipioId_depto: 8, departamentoId: 4, descripcion: "SAN ANTONIO LA PAZ", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 2, descripcion: "ANTIGUA GUATEMALA", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 2, descripcion: "JOCOTENANGO", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 2, descripcion: "PASTORES", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 2, descripcion: "SUMPANGO", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 2, descripcion: "SANTO DOMINGO XENACOJ", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 2, descripcion: "SANTIAGO SACATEPEQUEZ", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 2, descripcion: "SAN BARTOLOME MILPAS ALTAS", usuario_crea: 1 },
  { municipioId_depto: 8, departamentoId: 2, descripcion: "SAN LUCAS SACATEPEQUEZ", usuario_crea: 1 },
  { municipioId_depto: 9, departamentoId: 2, descripcion: "SANTA LUCIA MILPAS ALTAS", usuario_crea: 1 },
  { municipioId_depto: 10, departamentoId: 2, descripcion: "MAGDALENA MILPAS ALTAS", usuario_crea: 1 },
  { municipioId_depto: 11, departamentoId: 2, descripcion: "SANTA MARIA DE JESUS", usuario_crea: 1 },
  { municipioId_depto: 12, departamentoId: 2, descripcion: "CIUDAD VIEJA", usuario_crea: 1 },
  { municipioId_depto: 13, departamentoId: 2, descripcion: "SAN MIGUEL DUEÑAS", usuario_crea: 1 },
  { municipioId_depto: 14, departamentoId: 2, descripcion: "SAN JUAN ALOTENANGO", usuario_crea: 1 },
  { municipioId_depto: 15, departamentoId: 2, descripcion: "SAN ANTONIO AGUAS CALIENTES", usuario_crea: 1 },
  { municipioId_depto: 16, departamentoId: 2, descripcion: "SANTA CATARINA BARAHONA", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 3, descripcion: "CHIMALTENANGO", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 3, descripcion: "SAN JOSE POAQUIL", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 3, descripcion: "SAN MARTIN JILOTEPEQUE", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 3, descripcion: "SAN JUAN COMALAPA", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 3, descripcion: "SANTA APOLONIA", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 3, descripcion: "TECPAN GUATEMALA", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 3, descripcion: "PATZUN", usuario_crea: 1 },
  { municipioId_depto: 8, departamentoId: 3, descripcion: "POCHUTA", usuario_crea: 1 },
  { municipioId_depto: 9, departamentoId: 3, descripcion: "PATZICIA", usuario_crea: 1 },
  { municipioId_depto: 10, departamentoId: 3, descripcion: "SANTA CRUZ BALANYA", usuario_crea: 1 },
  { municipioId_depto: 11, departamentoId: 3, descripcion: "ACATENANGO", usuario_crea: 1 },
  { municipioId_depto: 12, departamentoId: 3, descripcion: "YEPOCAPA", usuario_crea: 1 },
  { municipioId_depto: 13, departamentoId: 3, descripcion: "SAN ANDRES ITZAPA", usuario_crea: 1 },
  { municipioId_depto: 14, departamentoId: 3, descripcion: "PARRAMOS", usuario_crea: 1 },
  { municipioId_depto: 15, departamentoId: 3, descripcion: "ZARAGOZA", usuario_crea: 1 },
  { municipioId_depto: 16, departamentoId: 3, descripcion: "EL TEJAR", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 5, descripcion: "ESCUINTLA", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 5, descripcion: "SANTA LUCIA COTZUMALGUAPA", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 5, descripcion: "LA DEMOCRACIA", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 5, descripcion: "SIQUINALA", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 5, descripcion: "MASAGUA", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 5, descripcion: "TIQUISATE", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 5, descripcion: "LA GOMERA", usuario_crea: 1 },
  { municipioId_depto: 8, departamentoId: 5, descripcion: "GUANAGAZAPA", usuario_crea: 1 },
  { municipioId_depto: 9, departamentoId: 5, descripcion: "PUERTO SAN JOSE", usuario_crea: 1 },
  { municipioId_depto: 10, departamentoId: 5, descripcion: "IZTAPA", usuario_crea: 1 },
  { municipioId_depto: 11, departamentoId: 5, descripcion: "PALIN", usuario_crea: 1 },
  { municipioId_depto: 12, departamentoId: 5, descripcion: "SAN VICENTE PACAYA", usuario_crea: 1 },
  { municipioId_depto: 13, departamentoId: 5, descripcion: "NUEVA CONCEPCION", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 6, descripcion: "CUILAPA", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 6, descripcion: "BARBERENA", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 6, descripcion: "SANTA ROSA DE LIMA", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 6, descripcion: "CASILLAS", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 6, descripcion: "SAN RAFAEL LAS FLORES", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 6, descripcion: "ORATORIO", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 6, descripcion: "SAN JUAN TECUACO", usuario_crea: 1 },
  { municipioId_depto: 8, departamentoId: 6, descripcion: "CHIQUIMULILLA", usuario_crea: 1 },
  { municipioId_depto: 9, departamentoId: 6, descripcion: "TAXISCO", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 7, descripcion: "NAHUALA", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 7, descripcion: "SANTA CATARINA IXTAHUACAN", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 7, descripcion: "SANTA CLARA LA LAGUNA", usuario_crea: 1 },
  { municipioId_depto: 8, departamentoId: 7, descripcion: "CONCEPCION", usuario_crea: 1 },
  { municipioId_depto: 9, departamentoId: 7, descripcion: "SAN ANDRES SEMETABAJ", usuario_crea: 1 },
  { municipioId_depto: 10, departamentoId: 7, descripcion: "PANAJACHEL", usuario_crea: 1 },
  { municipioId_depto: 11, departamentoId: 7, descripcion: "SANTA CATARINA PALOPO", usuario_crea: 1 },
  { municipioId_depto: 12, departamentoId: 7, descripcion: "SAN ANTONIO PALOPO", usuario_crea: 1 },
  { municipioId_depto: 13, departamentoId: 7, descripcion: "SAN LUCAS TOLIMAN", usuario_crea: 1 },
  { municipioId_depto: 14, departamentoId: 7, descripcion: "SANTA CRUZ LA LAGUNA", usuario_crea: 1 },
  { municipioId_depto: 15, departamentoId: 7, descripcion: "SAN PABLO LA LAGUNA", usuario_crea: 1 },
  { municipioId_depto: 16, departamentoId: 7, descripcion: "SAN MARCOS LA LAGUNA", usuario_crea: 1 },
  { municipioId_depto: 17, departamentoId: 7, descripcion: "SAN JUAN LA LAGUNA", usuario_crea: 1 },
  { municipioId_depto: 18, departamentoId: 7, descripcion: "SAN PEDRO LA LAGUNA", usuario_crea: 1 },
  { municipioId_depto: 19, departamentoId: 7, descripcion: "SANTIAGO ATITLAN", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 8, descripcion: "TOTONICAPAN", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 8, descripcion: "SAN CRISTOBAL TOTONICAPAN", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 8, descripcion: "SAN FRANCISCO EL ALTO", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 8, descripcion: "SAN ANDRES XECUL", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 8, descripcion: "MOMOSTENANGO", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 8, descripcion: "SANTA MARIA CHIQUIMULA", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 8, descripcion: "SANTA LUCIA LA REFORMA", usuario_crea: 1 },
  { municipioId_depto: 8, departamentoId: 8, descripcion: "SAN BARTOLO", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 9, descripcion: "QUETZALTENANGO", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 9, descripcion: "SALCAJA", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 9, descripcion: "OLINTEPEQUE", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 9, descripcion: "SAN CARLOS SIJA", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 9, descripcion: "SIBILIA", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 9, descripcion: "CABRICAN", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 9, descripcion: "CAJOLA", usuario_crea: 1 },
  { municipioId_depto: 8, departamentoId: 9, descripcion: "SAN MIGUEL SIGUILA", usuario_crea: 1 },
  { municipioId_depto: 9, departamentoId: 9, descripcion: "SAN JUAN OSTUNCALCO", usuario_crea: 1 },
  { municipioId_depto: 10, departamentoId: 9, descripcion: "SAN MATEO", usuario_crea: 1 },
  { municipioId_depto: 11, departamentoId: 9, descripcion: "CONCEPCION CHIQUIRICHAPA", usuario_crea: 1 },
  { municipioId_depto: 12, departamentoId: 9, descripcion: "SAN MARTIN SACATEPEQUEZ", usuario_crea: 1 },
  { municipioId_depto: 13, departamentoId: 9, descripcion: "ALMOLONGA", usuario_crea: 1 },
  { municipioId_depto: 14, departamentoId: 9, descripcion: "CANTEL", usuario_crea: 1 },
  { municipioId_depto: 15, departamentoId: 9, descripcion: "HUITAN", usuario_crea: 1 },
  { municipioId_depto: 16, departamentoId: 9, descripcion: "ZUNIL", usuario_crea: 1 },
  { municipioId_depto: 17, departamentoId: 9, descripcion: "COLOMBA", usuario_crea: 1 },
  { municipioId_depto: 18, departamentoId: 9, descripcion: "SAN FRANCISCO LA UNION", usuario_crea: 1 },
  { municipioId_depto: 19, departamentoId: 9, descripcion: "EL PALMAR", usuario_crea: 1 },
  { municipioId_depto: 20, departamentoId: 9, descripcion: "COATEPEQUE", usuario_crea: 1 },
  { municipioId_depto: 21, departamentoId: 9, descripcion: "GENOVA", usuario_crea: 1 },
  { municipioId_depto: 22, departamentoId: 9, descripcion: "FLORES COSTA CUCA", usuario_crea: 1 },
  { municipioId_depto: 23, departamentoId: 9, descripcion: "LA ESPERANZA", usuario_crea: 1 },
  { municipioId_depto: 24, departamentoId: 9, descripcion: "PALESTINA DE LOS ALTOS", usuario_crea: 1 },
  { municipioId_depto: 25, departamentoId: 9, descripcion: "SAN FRANCISCO(INVALIDO)", usuario_crea: 1 },
  { municipioId_depto: 32, departamentoId: 13, descripcion: "UNION CANTINIL", usuario_crea: 1 },
  { municipioId_depto: 18, departamentoId: 16, descripcion: "RAXRUHA", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 10, descripcion: "MAZATENANGO", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 10, descripcion: "CUYOTENANGO", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 10, descripcion: "SAN FRANCISCO ZAPOTITLAN", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 10, descripcion: "SAN BERNARDINO", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 10, descripcion: "SAN JOSE EL IDOLO", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 10, descripcion: "SANTO DOMINGO SUCHITEPEQUEZ", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 10, descripcion: "SAN LORENZO", usuario_crea: 1 },
  { municipioId_depto: 8, departamentoId: 10, descripcion: "SAMAYAC", usuario_crea: 1 },
  { municipioId_depto: 9, departamentoId: 10, descripcion: "SAN PABLO JOCOPILAS", usuario_crea: 1 },
  { municipioId_depto: 10, departamentoId: 10, descripcion: "SAN ANTONIO SUCHITEPEQUEZ", usuario_crea: 1 },
  { municipioId_depto: 11, departamentoId: 10, descripcion: "SAN MIGUEL PANAN", usuario_crea: 1 },
  { municipioId_depto: 12, departamentoId: 10, descripcion: "SAN GABRIEL", usuario_crea: 1 },
  { municipioId_depto: 13, departamentoId: 10, descripcion: "CHICACAO", usuario_crea: 1 },
  { municipioId_depto: 14, departamentoId: 10, descripcion: "PATULUL", usuario_crea: 1 },
  { municipioId_depto: 15, departamentoId: 10, descripcion: "SANTA BARBARA", usuario_crea: 1 },
  { municipioId_depto: 16, departamentoId: 10, descripcion: "SAN JUAN BAUTISTA", usuario_crea: 1 },
  { municipioId_depto: 8, departamentoId: 11, descripcion: "NUEVO SAN CARLOS", usuario_crea: 1 },
  { municipioId_depto: 9, departamentoId: 11, descripcion: "EL ASINTAL", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 12, descripcion: "SAN MARCOS", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 12, descripcion: "SAN PEDRO SACAT. S.M.", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 12, descripcion: "SAN ANTONIO SACATEPEQUEZ", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 12, descripcion: "COMITANCILLO", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 12, descripcion: "SAN MIGUEL IXTAHUACAN", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 12, descripcion: "CONCEPCION TUTUAPA", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 12, descripcion: "TACANA", usuario_crea: 1 },
  { municipioId_depto: 8, departamentoId: 12, descripcion: "SIBINAL", usuario_crea: 1 },
  { municipioId_depto: 9, departamentoId: 12, descripcion: "TAJUMULCO", usuario_crea: 1 },
  { municipioId_depto: 10, departamentoId: 12, descripcion: "TEJUTLA", usuario_crea: 1 },
  { municipioId_depto: 11, departamentoId: 12, descripcion: "SAN RAFAEL PIE DE LA CUESTA", usuario_crea: 1 },
  { municipioId_depto: 12, departamentoId: 12, descripcion: "NUEVO PROGRESO", usuario_crea: 1 },
  { municipioId_depto: 13, departamentoId: 12, descripcion: "EL TUMBADOR", usuario_crea: 1 },
  { municipioId_depto: 14, departamentoId: 12, descripcion: "EL RODEO", usuario_crea: 1 },
  { municipioId_depto: 15, departamentoId: 12, descripcion: "MALACATAN", usuario_crea: 1 },
  { municipioId_depto: 16, departamentoId: 12, descripcion: "CATARINA", usuario_crea: 1 },
  { municipioId_depto: 17, departamentoId: 12, descripcion: "AYUTLA", usuario_crea: 1 },
  { municipioId_depto: 18, departamentoId: 12, descripcion: "PUERTO DE OCOS", usuario_crea: 1 },
  { municipioId_depto: 19, departamentoId: 12, descripcion: "SAN PABLO", usuario_crea: 1 },
  { municipioId_depto: 20, departamentoId: 12, descripcion: "EL QUETZAL", usuario_crea: 1 },
  { municipioId_depto: 21, departamentoId: 12, descripcion: "LA REFORMA", usuario_crea: 1 },
  { municipioId_depto: 22, departamentoId: 12, descripcion: "PAJAPITA", usuario_crea: 1 },
  { municipioId_depto: 23, departamentoId: 12, descripcion: "IXCHIGUAN", usuario_crea: 1 },
  { municipioId_depto: 24, departamentoId: 12, descripcion: "SAN JOSE OJETENAM", usuario_crea: 1 },
  { municipioId_depto: 25, departamentoId: 12, descripcion: "SAN CRISTOBAL CUCHO", usuario_crea: 1 },
  { municipioId_depto: 26, departamentoId: 12, descripcion: "SIPACAPA", usuario_crea: 1 },
  { municipioId_depto: 27, departamentoId: 12, descripcion: "ESQUIPULAS PALO GORDO", usuario_crea: 1 },
  { municipioId_depto: 28, departamentoId: 12, descripcion: "RIO BLANCO", usuario_crea: 1 },
  { municipioId_depto: 29, departamentoId: 12, descripcion: "SAN LORENZO S.M.", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 13, descripcion: "HUEHUETENANGO", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 13, descripcion: "CHIANTLA", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 13, descripcion: "MALACATANCITO", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 13, descripcion: "CUILCO", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 13, descripcion: "NENTON", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 13, descripcion: "SAN PEDRO NECTA", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 13, descripcion: "JACALTENANGO", usuario_crea: 1 },
  { municipioId_depto: 8, departamentoId: 13, descripcion: "SOLOMA", usuario_crea: 1 },
  { municipioId_depto: 9, departamentoId: 13, descripcion: "IXTAHUACAN", usuario_crea: 1 },
  { municipioId_depto: 10, departamentoId: 13, descripcion: "SANTA BARBARA (HUEHUE)", usuario_crea: 1 },
  { municipioId_depto: 11, departamentoId: 13, descripcion: "LA LIBERTAD", usuario_crea: 1 },
  { municipioId_depto: 12, departamentoId: 13, descripcion: "LA DEMOCRACIA (HUEHUE)", usuario_crea: 1 },
  { municipioId_depto: 13, departamentoId: 13, descripcion: "SAN MIGUEL ACATAN", usuario_crea: 1 },
  { municipioId_depto: 14, departamentoId: 13, descripcion: "SAN RAFAEL INDEPENDENCIA", usuario_crea: 1 },
  { municipioId_depto: 15, departamentoId: 13, descripcion: "TODOS SANTOS CUCHUMATAN", usuario_crea: 1 },
  { municipioId_depto: 16, departamentoId: 13, descripcion: "SAN JUAN ATITAN", usuario_crea: 1 },
  { municipioId_depto: 17, departamentoId: 13, descripcion: "SANTA EULALIA", usuario_crea: 1 },
  { municipioId_depto: 18, departamentoId: 13, descripcion: "SAN MATEO IXTATAN", usuario_crea: 1 },
  { municipioId_depto: 19, departamentoId: 13, descripcion: "COLOTENANGO", usuario_crea: 1 },
  { municipioId_depto: 20, departamentoId: 13, descripcion: "SAN SEBASTIAN HUEHUETENANGO", usuario_crea: 1 },
  { municipioId_depto: 21, departamentoId: 13, descripcion: "TECTITAN", usuario_crea: 1 },
  { municipioId_depto: 22, departamentoId: 13, descripcion: "CONCEPCION HUISTA", usuario_crea: 1 },
  { municipioId_depto: 23, departamentoId: 13, descripcion: "SAN JUAN IXCOY", usuario_crea: 1 },
  { municipioId_depto: 24, departamentoId: 13, descripcion: "SAN ANTONIO HUISTA", usuario_crea: 1 },
  { municipioId_depto: 25, departamentoId: 13, descripcion: "SAN SEBASTIAN COATAN", usuario_crea: 1 },
  { municipioId_depto: 26, departamentoId: 13, descripcion: "BARILLAS", usuario_crea: 1 },
  { municipioId_depto: 27, departamentoId: 13, descripcion: "AGUACATAN", usuario_crea: 1 },
  { municipioId_depto: 28, departamentoId: 13, descripcion: "SAN RAFAEL PETZAL", usuario_crea: 1 },
  { municipioId_depto: 29, departamentoId: 13, descripcion: "SAN GASPAR IXCHIL", usuario_crea: 1 },
  { municipioId_depto: 30, departamentoId: 13, descripcion: "SANTIAGO CHIMALTENANGO", usuario_crea: 1 },
  { municipioId_depto: 31, departamentoId: 13, descripcion: "SANTA ANA HUISTA", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 14, descripcion: "SANTA CRUZ DEL QUICHE", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 14, descripcion: "CHICHE", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 14, descripcion: "CHINIQUE", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 14, descripcion: "ZACUALPA", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 14, descripcion: "CHAJUL", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 14, descripcion: "CHICHICASTENANGO", usuario_crea: 1 },
  { municipioId_depto: 20, departamentoId: 14, descripcion: "IXCAN", usuario_crea: 1 },
  { municipioId_depto: 21, departamentoId: 14, descripcion: "PACHALUM", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 15, descripcion: "SALAMA", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 15, descripcion: "SAN MIGUEL CHICAJ", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 15, descripcion: "RABINAL", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 15, descripcion: "CUBULCO", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 15, descripcion: "GRANADOS", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 15, descripcion: "EL CHOL", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 15, descripcion: "SAN JERONIMO", usuario_crea: 1 },
  { municipioId_depto: 8, departamentoId: 15, descripcion: "PURULHA", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 16, descripcion: "COBAN", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 16, descripcion: "SANTA CRUZ VERAPAZ", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 16, descripcion: "SAN CRISTOBAL VERAPAZ", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 16, descripcion: "TACTIC", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 16, descripcion: "TAMAHU", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 16, descripcion: "TUCURU", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 16, descripcion: "PANZOS", usuario_crea: 1 },
  { municipioId_depto: 8, departamentoId: 16, descripcion: "SENAHU", usuario_crea: 1 },
  { municipioId_depto: 9, departamentoId: 16, descripcion: "SAN PEDRO CARCHA", usuario_crea: 1 },
  { municipioId_depto: 10, departamentoId: 16, descripcion: "SAN JUAN CHAMELCO", usuario_crea: 1 },
  { municipioId_depto: 11, departamentoId: 16, descripcion: "LANQUIN", usuario_crea: 1 },
  { municipioId_depto: 12, departamentoId: 16, descripcion: "CAHABON", usuario_crea: 1 },
  { municipioId_depto: 13, departamentoId: 16, descripcion: "CHISEC", usuario_crea: 1 },
  { municipioId_depto: 14, departamentoId: 16, descripcion: "CHAHAL", usuario_crea: 1 },
  { municipioId_depto: 15, departamentoId: 16, descripcion: "FRAY BARTOLOME DE LAS CASAS", usuario_crea: 1 },
  { municipioId_depto: 16, departamentoId: 16, descripcion: "SAN CRISTOBAL", usuario_crea: 1 },
  { municipioId_depto: 17, departamentoId: 16, descripcion: "SANTA CATALINA LA TINTA", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 17, descripcion: "FLORES", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 17, descripcion: "SAN JOSE", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 17, descripcion: "SAN BENITO", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 17, descripcion: "SAN ANDRES", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 17, descripcion: "LA LIBERTAD (PETEN)", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 17, descripcion: "SAN FRANCISCO PETEN", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 17, descripcion: "SANTA ANA", usuario_crea: 1 },
  { municipioId_depto: 8, departamentoId: 17, descripcion: "DOLORES", usuario_crea: 1 },
  { municipioId_depto: 9, departamentoId: 17, descripcion: "SAN LUIS", usuario_crea: 1 },
  { municipioId_depto: 10, departamentoId: 17, descripcion: "SAYAXCHE", usuario_crea: 1 },
  { municipioId_depto: 11, departamentoId: 17, descripcion: "MELCHOR DE MENCOS", usuario_crea: 1 },
  { municipioId_depto: 12, departamentoId: 17, descripcion: "POPTUN", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 18, descripcion: "PUERTO BARRIOS", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 18, descripcion: "LIVINGSTON", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 18, descripcion: "EL ESTOR", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 18, descripcion: "MORALES", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 18, descripcion: "LOS AMATES", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 19, descripcion: "ZACAPA", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 19, descripcion: "ESTANZUELA", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 19, descripcion: "RIO HONDO", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 19, descripcion: "GUALAN", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 19, descripcion: "TECULUTAN", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 19, descripcion: "USUMATLAN", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 19, descripcion: "CABAÑAS", usuario_crea: 1 },
  { municipioId_depto: 8, departamentoId: 19, descripcion: "SAN DIEGO", usuario_crea: 1 },
  { municipioId_depto: 9, departamentoId: 19, descripcion: "LA UNION", usuario_crea: 1 },
  { municipioId_depto: 10, departamentoId: 19, descripcion: "HUITE", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 20, descripcion: "CHIQUIMULA", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 20, descripcion: "SAN JOSE LA ARADA", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 20, descripcion: "SAN JUAN ERMITA", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 20, descripcion: "JOCOTAN", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 20, descripcion: "CAMOTAN", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 20, descripcion: "ESQUIPULAS", usuario_crea: 1 },
  { municipioId_depto: 8, departamentoId: 20, descripcion: "CONCEPCION LAS MINAS", usuario_crea: 1 },
  { municipioId_depto: 9, departamentoId: 20, descripcion: "QUETZALTEPEQUE", usuario_crea: 1 },
  { municipioId_depto: 10, departamentoId: 20, descripcion: "OLOPA", usuario_crea: 1 },
  { municipioId_depto: 11, departamentoId: 20, descripcion: "IPALA", usuario_crea: 1 },
  { municipioId_depto: 12, departamentoId: 20, descripcion: "SAN JACINTO", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 21, descripcion: "JALAPA", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 21, descripcion: "SAN PEDRO PINULA", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 21, descripcion: "SAN LUIS JILOTEPEQUE", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 21, descripcion: "SAN MANUEL CHAPARRON", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 21, descripcion: "SAN CARLOS ALZATATE", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 21, descripcion: "MONJAS", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 21, descripcion: "MATAQUESCUINTLA", usuario_crea: 1 },
  { municipioId_depto: 1, departamentoId: 22, descripcion: "JUTIAPA", usuario_crea: 1 },
  { municipioId_depto: 2, departamentoId: 22, descripcion: "EL PROGRESO", usuario_crea: 1 },
  { municipioId_depto: 3, departamentoId: 22, descripcion: "SANTA CATARINA MITA", usuario_crea: 1 },
  { municipioId_depto: 4, departamentoId: 22, descripcion: "AGUA BLANCA", usuario_crea: 1 },
  { municipioId_depto: 5, departamentoId: 22, descripcion: "ASUNCION MITA", usuario_crea: 1 },
  { municipioId_depto: 6, departamentoId: 22, descripcion: "YUPILTEPEQUE", usuario_crea: 1 },
  { municipioId_depto: 7, departamentoId: 22, descripcion: "ATESCATEMPA", usuario_crea: 1 },
  { municipioId_depto: 8, departamentoId: 22, descripcion: "JEREZ", usuario_crea: 1 },
  { municipioId_depto: 9, departamentoId: 22, descripcion: "EL ADELANTO", usuario_crea: 1 },
  { municipioId_depto: 10, departamentoId: 22, descripcion: "ZAPOTITLAN", usuario_crea: 1 },
  { municipioId_depto: 11, departamentoId: 22, descripcion: "COMAPA", usuario_crea: 1 },
  { municipioId_depto: 12, departamentoId: 22, descripcion: "JALPATAGUA", usuario_crea: 1 },
  { municipioId_depto: 13, departamentoId: 22, descripcion: "CONGUACO", usuario_crea: 1 },
  { municipioId_depto: 14, departamentoId: 22, descripcion: "MOYUTA", usuario_crea: 1 },
  { municipioId_depto: 15, departamentoId: 22, descripcion: "PASACO", usuario_crea: 1 },
  { municipioId_depto: 16, departamentoId: 22, descripcion: "SAN JOSE ACATEMPA", usuario_crea: 1 },
  { municipioId_depto: 17, departamentoId: 22, descripcion: "QUESADA", usuario_crea: 1 }
];

const Menus = [
  {
    posicion: 1,
    descripcion: "Catálogos",
    href: "",
    icono: "",
    menu_padreId: 0,
    usuario_crea: 1
  },
  {
    posicion: 2,
    descripcion: "Estados",
    href: "",
    icono: "",
    menu_padreId: 1,
    usuario_crea: 1
  },
  {
    posicion: 3,
    descripcion: "Generos",
    href: "",
    icono: "",
    menu_padreId: 1,
    usuario_crea: 1
  },
  {
    posicion: 4,
    descripcion: "Estado Civil",
    href: "",
    icono: "",
    menu_padreId: 1,
    usuario_crea: 1
  },
  {
    posicion: 5,
    descripcion: "Tipo documento",
    href: "",
    icono: "",
    menu_padreId: 1,
    usuario_crea: 1
  },
  {
    posicion: 6,
    descripcion: "Tipo de Sangre",
    href: "",
    icono: "",
    menu_padreId: 1,
    usuario_crea: 1
  }, {
    posicion: 7,
    descripcion: "Tipo de Teléfono",
    href: "",
    icono: "",
    menu_padreId: 1,
    usuario_crea: 1
  },
  {
    posicion: 8,
    descripcion: "Pais",
    href: "",
    icono: "",
    menu_padreId: 1,
    usuario_crea: 1
  },
  {
    posicion: 9,
    descripcion: "Departamento",
    href: "",
    icono: "",
    menu_padreId: 1,
    usuario_crea: 1
  },
  {
    posicion: 10,
    descripcion: "Municipio",
    href: "",
    icono: "",
    menu_padreId: 1,
    usuario_crea: 1
  },
  {
    posicion: 11,
    descripcion: "Rol",
    href: "",
    icono: "",
    menu_padreId: 1,
    usuario_crea: 1
  },
  {
    posicion: 12,
    descripcion: "Persona",
    href: "",
    icono: "",
    menu_padreId: 0,
    usuario_crea: 1
  },
  {
    posicion: 13,
    descripcion: "Identificacion Persona",
    href: "",
    icono: "",
    menu_padreId: 0,
    usuario_crea: 1
  },
  {
    posicion: 14,
    descripcion: "Telefono Persona",
    href: "",
    icono: "",
    menu_padreId: 0,
    usuario_crea: 1
  },
  {
    posicion: 15,
    descripcion: "Direccion Persona",
    href: "",
    icono: "",
    menu_padreId: 0,
    usuario_crea: 1
  },
  {
    posicion: 16,
    descripcion: "Dato extra persona",
    href: "",
    icono: "",
    menu_padreId: 0,
    usuario_crea: 1
  },
  {
    posicion: 17,
    descripcion: "Usuario",
    href: "",
    icono: "",
    menu_padreId: 0,
    usuario_crea: 1
  },
  {
    posicion: 18,
    descripcion: "Usuario Rol",
    href: "",
    icono: "",
    menu_padreId: 0,
    usuario_crea: 1
  }
];

const MenuAccesos = [
  {
    menuId: 2,
    accesoId: 1,
    usuario_crea: 1
  },
  {
    menuId: 2,
    accesoId: 2,
    usuario_crea: 1
  },
  {
    menuId: 2,
    accesoId: 3,
    usuario_crea: 1
  },
  {
    menuId: 3,
    accesoId: 1,
    usuario_crea: 1
  },
  {
    menuId: 3,
    accesoId: 2,
    usuario_crea: 1
  },
  {
    menuId: 3,
    accesoId: 3,
    usuario_crea: 1
  },
  {
    menuId: 4,
    accesoId: 1,
    usuario_crea: 1
  },
  {
    menuId: 4,
    accesoId: 2,
    usuario_crea: 1
  },
  {
    menuId: 4,
    accesoId: 3,
    usuario_crea: 1
  }, {
    menuId: 5,
    accesoId: 1,
    usuario_crea: 1
  },
  {
    menuId: 5,
    accesoId: 2,
    usuario_crea: 1
  },
  {
    menuId: 5,
    accesoId: 3,
    usuario_crea: 1
  },
  {
    menuId: 6,
    accesoId: 1,
    usuario_crea: 1
  },
  {
    menuId: 6,
    accesoId: 2,
    usuario_crea: 1
  },
  {
    menuId: 6,
    accesoId: 3,
    usuario_crea: 1
  },
  {
    menuId: 7,
    accesoId: 1,
    usuario_crea: 1
  },
  {
    menuId: 7,
    accesoId: 2,
    usuario_crea: 1
  },
  {
    menuId: 7,
    accesoId: 3,
    usuario_crea: 1
  },
  {
    menuId: 8,
    accesoId: 1,
    usuario_crea: 1
  },
  {
    menuId: 8,
    accesoId: 2,
    usuario_crea: 1
  },
  {
    menuId: 8,
    accesoId: 3,
    usuario_crea: 1
  },
  {
    menuId: 9,
    accesoId: 1,
    usuario_crea: 1
  },
  {
    menuId: 9,
    accesoId: 2,
    usuario_crea: 1
  },
  {
    menuId: 9,
    accesoId: 3,
    usuario_crea: 1
  },
  {
    menuId: 10,
    accesoId: 1,
    usuario_crea: 1
  },
  {
    menuId: 10,
    accesoId: 2,
    usuario_crea: 1
  },
  {
    menuId: 10,
    accesoId: 3,
    usuario_crea: 1
  },
  {
    menuId: 11,
    accesoId: 1,
    usuario_crea: 1
  },
  {
    menuId: 11,
    accesoId: 2,
    usuario_crea: 1
  },
  {
    menuId: 11,
    accesoId: 3,
    usuario_crea: 1
  },
  {
    menuId: 12,
    accesoId: 1,
    usuario_crea: 1
  },
  {
    menuId: 12,
    accesoId: 2,
    usuario_crea: 1
  },
  {
    menuId: 12,
    accesoId: 3,
    usuario_crea: 1
  }, {
    menuId: 13,
    accesoId: 1,
    usuario_crea: 1
  },
  {
    menuId: 13,
    accesoId: 2,
    usuario_crea: 1
  },
  {
    menuId: 13,
    accesoId: 3,
    usuario_crea: 1
  }, {
    menuId: 14,
    accesoId: 1,
    usuario_crea: 1
  },
  {
    menuId: 14,
    accesoId: 2,
    usuario_crea: 1
  },
  {
    menuId: 14,
    accesoId: 3,
    usuario_crea: 1
  }, {
    menuId: 15,
    accesoId: 1,
    usuario_crea: 1
  },
  {
    menuId: 15,
    accesoId: 2,
    usuario_crea: 1
  },
  {
    menuId: 15,
    accesoId: 3,
    usuario_crea: 1
  },
  {
    menuId: 16,
    accesoId: 1,
    usuario_crea: 1
  },
  {
    menuId: 16,
    accesoId: 2,
    usuario_crea: 1
  },
  {
    menuId: 16,
    accesoId: 3,
    usuario_crea: 1
  },
  {
    menuId: 17,
    accesoId: 1,
    usuario_crea: 1
  },
  {
    menuId: 17,
    accesoId: 2,
    usuario_crea: 1
  },
  {
    menuId: 17,
    accesoId: 3,
    usuario_crea: 1
  },
  {
    menuId: 18,
    accesoId: 1,
    usuario_crea: 1
  },
  {
    menuId: 18,
    accesoId: 2,
    usuario_crea: 1
  },
  {
    menuId: 18,
    accesoId: 3,
    usuario_crea: 1
  }
];

const MenuAccesosRol = [
  {
    rolId: 1,
    menu_accesoId: 1,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 2,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 3,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 4,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 5,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 6,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 7,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 8,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 9,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 10,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 11,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 12,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 13,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 14,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 15,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 16,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 17,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 18,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 19,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 20,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 21,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 22,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 23,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 24,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 25,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 26,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 27,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 28,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 29,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 30,
    usuario_crea: 1
  }, {
    rolId: 1,
    menu_accesoId: 31,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 32,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 33,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 34,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 35,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 36,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 37,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 38,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 39,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 40,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 41,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 42,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 43,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 44,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 45,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 46,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 47,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 48,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 49,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 50,
    usuario_crea: 1
  },
  {
    rolId: 1,
    menu_accesoId: 51,
    usuario_crea: 1
  }
];



module.exports = {
  Departamentos,
  Municipios,
  Menus,
  MenuAccesos,
  MenuAccesosRol
}
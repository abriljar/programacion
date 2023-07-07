let x = []; // array que almacena las posiciones eje X de las imágenes
let y = 1100; // posicion Y de las imágenes
let velocidad = 2; // velocidad de movimiento imagenes
let myFont;
let myFont2;
let song
let miSonido
let hoverIndex = 1; // Índice de la imagen en la que se está haciendo hover


function preload() { // funcion para cargar imagenes que vamos a utilizar
  img1 = loadImage("pngs/paz rosa.png");
  img2 = loadImage("pngs/fondofinal.jpg");
  img3 = loadImage("pngs/pez celeste.png");
  img4 = loadImage("pngs/tortuga.png");
  img5 = loadImage("pngs/pez naranja.png");
  img6 = loadImage("pngs/pez amarillo.png");
  img7 = loadImage("pngs/pez azul.png");
  img8 = loadImage("pngs/bolsa azul.png");
  img9 = loadImage("pngs/bolsa roja.png");
  img10 = loadImage("pngs/caja.png");
  img11 = loadImage("pngs/cadaver1.png");
  img12 = loadImage("pngs/cadaver2.png");
  img13 = loadImage("pngs/botella.png");
  img14 = loadImage("pngs/vaso.png");
  img15 = loadImage("pngs/barco.png");
  img16 = loadImage("pngs/grafico2.png");

  myFont = loadFont('fonts/Helvetica.ttf');
  myFont2 = loadFont('fonts/Helvetica-rounded.otf');
  song = createAudio('sound/Sonido Bajo el Mar.mp3');
  //miSonido = loadSound('sound/ruido bote bocina.mp3');
  //miSonido = loadSound('sound/ruido bote agua.mp3');
}

function setup() {

  //song.play()


  createCanvas(1500, 3160);
  textFont(myFont);
  textFont(myFont2);
  imageMode(CENTER);

  x[0] = random(0, width);
  x[1] = random(0, width);
  x[2] = random(0, width);
  x[3] = random(0, width);
  x[4] = random(0, width);
  x[5] = random(0, width);
  x[6] = random(0, width);
  x[7] = random(0, width);
  x[8] = random(0, width);
  x[9] = random(0, width);
  x[10] = random(0, width);
  x[11] = random(0, width);
  x[12] = random(0, width);
  x[13] = random(0, width);

  for (let i = 0; i < 13; i++) {
    x[i] = random(width);
  }

  // genero posiciones X iniciales aleatorias para cada imagen, para lograr que las imagenes no queden en una misma linea X, generando mejor efecto de que estan flotando

}
/*
function mouseClicked() {
  // Verificar si se hizo clic en la imagen img15
  const imageX = x[13] + width / 2;
  const imageY = y - 325;

  if (
    mouseX >= imageX - 250 &&
    mouseX <= imageX + 250 &&
    mouseY >= imageY - 215 &&
    mouseY <= imageY + 215
  ) {
    miSonido.play();
  }
}
*/

function draw() {

  background(60, 180, 255);
  image(img2, 740, 1580, 1545, 3180)


  for (let i = 0; i < x.length; i++) {
    // actualizo la posicion X de cada imagen 
    if (i === 1 || i === 2 || i === 3 || i === 5 || i === 6 || i === 7 || i === 10 || i === 11 || i === 13) {
      x[i] -= velocidad; // resta la velocidad para aquellas imagenes que se deslizan a la izquierda
    } else {
      x[i] += velocidad;  // suma la velocidad para aquellas imagenes que se deslizan a la derecha
    }

    if (x[i] > width + img2.width) {
      x[i] = random(-img2.width / 2, -img2.width / 2);
    } else if (x[i] < -img2.width / 2) {
      x[i] = random(width + img2.width / 2, width + img2.width / 2);
    } // cuando la imagen sale de la pantalla, se reinicia su posicion, y vuelve a comenzar su movimiento

    stroke(0);
    if (i === 0) { // dibujo las imagenes
      image(img1, x[i], y, 250, 180);
    } else if (i === 1) {
      image(img3, x[i], y + 100, 250, 180);
    } else if (i === 2) {
      image(img4, x[i], y + 700, 250, 180);
    } else if (i === 3) {
      image(img5, x[i], y + 400, 250, 180);
    } else if (i === 4) {
      image(img6, x[i], y + 900, 250, 180);
    } else if (i === 5) {
      image(img7, x[i], y + 1100, 250, 180);
    } else if (i === 6) {
      image(img8, x[i], y + 1400, 250, 180);
    } else if (i === 7) {
      image(img14, x[i], y + 1600, 250, 180);
    } else if (i === 8) {
      image(img10, x[i], y + 1550, 250, 180);
    } else if (i === 9) {
      image(img9, x[i], y + 1300, 250, 180);
    } else if (i === 10) {
      image(img11, x[i], y + 1750, 250, 180);
    } else if (i === 11) {
      image(img12, x[i], y + 1850, 250, 180);
    } else if (i === 12) {
      image(img13, x[i], y + 2000, 250, 180);
    } else if (i === 13) {
      image(img15, x[i], y - 325, 500, 430);
    }
  }

 hoverIndex = 1;
  for (let i = 0; i < x.length; i++) {
    const imageX = x[i] + width / 2; // Coordenada X relativa al centro del lienzo
    const imageY = y;
  }
  /*if (
      mouseX >= imageX - 125 &&
      mouseX <= imageX + 1 &&
      mouseY >= imageY - 90 &&
      mouseY <= imageY + 90
    ) {
      hoverIndex = i;
      break;
    }
  } */



  // Mostrar el texto correspondiente al hacer hover
  if (hoverIndex !== -1) {
    // Mostrar texto basado en el índice de la imagen
    if (hoverIndex === 0) { 
      noStroke();
      textFont(myFont)
      fill(235, 235, 235, 255); // Color del texto del párrafo
      textAlign(LEFT, TOP); // Alineación del texto del párrafo
      paragraphWidth = 1500 * 0.8; // Ancho del párrafo 
      textAlign(CENTER, TOP);
      paragraphY = 1000;
      paragraphX = (width - paragraphWidth) / 2;
      textSize(20); // Tamaño del texto del párrafo
      text('El objetivo 14 de la ONU se centra en conservar y utilizar de manera sostenible los océanos, los mares y los recursos marinos. El océano desempeña un papel fundamental en la regulación de los sistemas mundiales que hacen de la Tierra un lugar habitable para el ser humano. Además de proveernos de lluvia, agua potable, clima y oxígeno, también desempeña un papel crucial en la producción de alimentos y en la protección de los litorales.', paragraphX, paragraphY, paragraphWidth);

  } else if (hoverIndex === 1) {
      noStroke();
      textFont(myFont)
      fill(235, 235, 235, 255); // Color del texto del párrafo
      textAlign(LEFT, TOP); // Alineación del texto del párrafo
      paragraphWidth = 1500 * 0.8; // Ancho del párrafo 
      textAlign(CENTER, TOP);
      paragraphY = 1200;
      paragraphX = (width - paragraphWidth) / 2;
      textSize(20); // Tamaño del texto del párrafo
      text('Sin embargo, en la actualidad, nos enfrentamos a un deterioro constante de las aguas costeras debido a la contaminación y la acidificación de los océanos, lo que genera efectos adversos en los ecosistemas y la biodiversidad marina. Además, está teniendo un impacto perjudicial en las pesquerías de pequeña escala. Es imperativo que protejamos nuestros océanos y su biodiversidad. Esto implica gestionar de manera efectiva las áreas marinas protegidas y sus recursos, e implementar regulaciones que reduzcan la sobrepesca, la contaminación marina y la acidificación de los océanos.', paragraphX, paragraphY, paragraphWidth);

   } else if (hoverIndex === 2) {
      noStroke();
      textFont(myFont)
      fill(235, 235, 235, 255); // Color del texto del párrafo
      textAlign(LEFT, TOP); // Alineación del texto del párrafo
      paragraphWidth = 1500 * 0.8; // Ancho del párrafo 
      textAlign(CENTER, TOP);
      paragraphY = 1750;
      paragraphX = (width - paragraphWidth) / 2;
      textSize(36); // Tamaño del texto del párrafo
      text('Si la situación actual continúa, para el 2025 se pronostica que 1.303.186 toneladas de plástico estarán presentes en los espacios marinos de la región del Pacífico Nordeste.', paragraphX, paragraphY, paragraphWidth);

   } else if (hoverIndex === 3) {
      noStroke();
      textFont(myFont)
      fill(235, 235, 235, 255); // Color del texto del párrafo
      paragraphWidth = 340; // Ancho del párrafo 
      textAlign(CENTER, TOP);
      paragraphY = height - 1670;
      paragraphX = (width - paragraphWidth) / 2 - 400;
      textSize(18);
      text("Los océanos absorben alrededor del 30% del dióxido de carbono producido por los humanos, amortiguando los impactos del calentamiento global.", paragraphX, paragraphY, paragraphWidth);

   } else if (hoverIndex === 4) {
      textFont(myFont)
      paragraphWidth = 340; // Ancho del párrafo 
      textAlign(CENTER, TOP);
      paragraphY = height - 1670;
      paragraphX = (width - paragraphWidth) / 2;
      textSize(18);
      text("Los espacios de mar abierto muestran que los niveles actuales de acidez han aumentado en un 26 por ciento desde el comienzo de la Revolución Industrial.", paragraphX, paragraphY, paragraphWidth);

    } else if (hoverIndex === 5) {
      paragraphWidth = 330; // Ancho del párrafo 
      textFont(myFont)
      textAlign(CENTER, TOP);
      paragraphY = height - 1670;
      paragraphX = (width - paragraphWidth) / 2 + 400;
      textSize(18);
      text("Los océanos son la mayor fuente de proteínas del mundo. Más de 3.000 millones de personas dependen de los océanos como su fuente principal.", paragraphX, paragraphY, paragraphWidth);

      noStroke();
      textFont(myFont2)
      fill(11, 64, 81); // Color del texto del párrafo
      textAlign(LEFT, TOP); // Alineación del texto del párrafo
      paragraphWidth = 1500 * 0.8; // Ancho del párrafo 
      textAlign(CENTER, TOP);
      paragraphY = 2000;
      paragraphX = (width - paragraphWidth) / 2;
      textSize(50); // Tamaño del texto del párrafo
      text('BASURA MARINA', paragraphX, paragraphY, paragraphWidth);

      noStroke();
      textFont(myFont)
      fill(235, 235, 235, 255); // Color del texto del párrafo
      textAlign(LEFT, TOP); // Alineación del texto del párrafo
      paragraphWidth = 1500 * 0.8; // Ancho del párrafo 
      textAlign(CENTER, TOP);
      paragraphY = 2080;
      paragraphX = (width - paragraphWidth) / 2;
      textSize(20); // Tamaño del texto del párrafo
      text('Los océanos se han convertido en inmensos depósitos de desechos plásticos. Según el Programa de las Naciones Unidas para el Medio Ambiente (PNUMA), el 80% de la basura marina proviene de fuentes terrestres, principalmente por plásticos asociados a empaques de alimentos y bebidas. ', paragraphX, paragraphY, paragraphWidth);

      image(img16, 710, 2500, 534, 598)

      noStroke();
      textFont(myFont2)
      fill(235, 235, 235, 255); // Color del texto del párrafo
      textAlign(LEFT, TOP); // Alineación del texto del párrafo
      paragraphWidth = 1500 * 0.8; // Ancho del párrafo 
      textAlign(CENTER, TOP);
      paragraphY = 2850;
      paragraphX = (width - paragraphWidth) / 2;
      textSize(38); // Tamaño del texto del párrafo
      text('Para el año 2050 habrá más plástico en el mar que peces.', paragraphX, paragraphY, paragraphWidth);

      
    }
}
}



function windowResized() { // tamaño de la imagen de fondo
  resizeCanvas(windowWidth, 3249);
}
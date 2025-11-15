import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../servicio/carrito.service';
import { aja } from '../model/aja.model';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-bellezas',
  imports: [CommonModule,RouterModule, FormsModule],
  templateUrl: './bellezas.component.html',
  styleUrl: './bellezas.component.css'
})
export class BellezasComponent {
productos:aja[]=[
 {
    id:1,
    nombre:'EXPLORER-ANTIQUE-NATURAL',
    descripccion:'Cada nota cobra vida con claridad y potencia. Pensada para quienes buscan identidad propia en su música. pollo con papa, pollo con papa, poyo con papa',
    precio:4578891,
    imagen:'https://sc1.musik-produktiv.com/pic-010156371xxl/gibson-70s-explorer-antique-natural.jpg',
    disponible:true,
    cantidad:1,
    categoria:'jjb',
    marca:'puto',
 },
 {
    id:2,
    nombre:'SUPERSTRATO TRBELECTRICARO',
    descripccion:'Diseñada para rockear. Gracias a sus pastillas de alta calidad, ofrece desde tonos cálidos hasta distorsiones agresivas. Ideal para músicos creativos.',
    precio:973422,
    imagen:'https://stratusmusicstore.com.mx/cdn/shop/products/GUITARRAIBANEZGRX70QA-TRBELECTRICARO_1200x.jpg?v=1611888495',
    disponible:true,
    cantidad:1,
    categoria:'hola',
    marca:'pñp',
 },
 {
    id:3,
    nombre:'SUPERSTRATO IBANEZ',
    descripccion:'Versatilidad total. Con cuerpo sólido, mástil cómodo y sonido potente, esta guitarra te acompaña en cada riff, solo o melodía. ensalada rusa, ensalada rusa, ensalada tusa ',
    precio:346477,
    imagen:'https://www.heavenimagenes.com/heavencommerce/e11e0483-99c8-4ad2-b3a9-bfb26fc81402/images/v2/IBANEZ/2103171142395499_01_xlarge.jpg',
    disponible:true,
    cantidad:1,
    categoria:'kk',
    marca:'oo',
 },{
    id:4,
    nombre:'STRATO',
    descripccion:'Clásica y potente. La guitarra eléctrica ideal para quienes quieren un sonido definido y un diseño atemporal. Perfecta para cualquier estilo musical. banana, banana, banana ',
    precio:3457883,
    imagen:'https://makemusic.pe/wp-content/uploads/2024/04/L-G1-ST-RD-1.jpg',
    disponible:true,
    cantidad:1,
    categoria:'35456',
    marca:'ij',
 },{
    id:5,
    nombre:'SUPERSTRATO IBANEZ V8',
    descripccion:'Sonido que inspira. Su diseño ergonómico permite tocar durante horas sin esfuerzo. Ideal para ensayos, shows o estudio. musica, musica, muscia',
    precio:79869542,
    imagen:'https://www.heavenimagenes.com/heavencommerce/e11e0483-99c8-4ad2-b3a9-bfb26fc81402/images/v2/IBANEZ/2103171143072854_01_large.jpg',
    disponible:true,
    cantidad:1,
    categoria:'9',
    marca:'yurt',
 },{
    id:5,
    nombre:'SUPERSTRATO OECHSLE',
    descripccion:'Ligera y cómoda. Acabado brillante y detalles cuidados para destacar en cualquier escenario. Hecha para quienes cuidan el sonido y la estética.',
    precio:56845323,
    imagen:'https://oechsle.vteximg.com.br/arquivos/ids/17486142/imageUrl_1.jpg?v=638506163839430000',
    disponible:true,
    cantidad:1,categoria:'9',
    marca:'yurt',
 },{
    id:6,
    nombre:'STRATO IBANEZ GSA',
    descripccion:'Estilo moderno. Tanto principiantes como expertos van a encontrar en esta guitarra una compañera fiel para desarrollar su música. cerati, cerati, cerati',
    precio:4568468342,
    imagen:'https://alvarezmusica.com.ar/1109-large_default/guitarra-electrica-ibanez-gsa-60-bs.jpg',
    disponible:true,
    cantidad:1,categoria:'9',
    marca:'yurt',
 },{
    id:7,
    nombre:'SUPERSTRATO GENESIS COLLETION',
    descripccion:'Para todos los niveles. Su construcción sólida y electrónica confiable garantizan que siempre estés listo para tocar en vivo.',
    precio:63556432,
    imagen:'https://sc1.musik-produktiv.com/pic-010161497l/ibanez-rg550-eb-genesis-collection.jpg',
    disponible:true,
    cantidad:1,categoria:'9',
    marca:'yurt',
 },{
    id:8,
    nombre:'SUPERSTRATO JS9',
    descripccion:'Hecha para el escenario. Controles precisos, clavijas estables y un mástil cómodo: diseñada para que nada te distraiga de crear. asado seco megusta',
    precio:689574264,
    imagen:'https://solomusica.com.ar/sm2020/6990-home_default/ibanez-grx40-guitarra-electrica.jpg',
    disponible:true,
    cantidad:1,categoria:'9',
    marca:'yurt',
 },{
    id:9,
    nombre:'SUPERSTRATO IBANEZ V2',
    descripccion:'Detalles que enamoran. Ideal para solos filosos y bases poderosas. Un instrumento que deja huella en cada acorde. pan con queso, pan con queso',
    precio:233446973,
    imagen:'https://www.heavenimagenes.com/heavencommerce/0c5cacb8-dfbd-471a-ac7e-5c09a26f6da9/images/v2/IBANEZ/6778_large.jpg',
    disponible:true,
    cantidad:1,categoria:'9',
    marca:'yurt',
 },{
    id:10,
    nombre:'SG WINZZ V2',
    descripccion:'Sonido afilado, presencia asegurada. Respeta el espíritu clásico de las guitarras eléctricas pero con toques modernos para un sonido actual.agua con sal, agua ',
    precio:23547997,
    imagen:'https://www.heavenimagenes.com/heavencommerce/5765a4f8-445b-48f8-889e-9378aee05156/images/v2/WINZZ/14696_xlarge.jpg',
    disponible:true,
    cantidad:1,categoria:'9',
    marca:'yurt',
 },{
    id:11,
    nombre:'LES PAUEL VIE',
    descripccion:' Tradición renovada. Desde suaves arpegios hasta riffs pesados, esta guitarra responde a cada matiz de tu interpretación. porque un pollo fuma?',
    precio:89784573462,
    imagen:'https://www.redidguitar.com/cdn/shop/files/41lqElDcwjL._SL500.jpg?v=1688040837',
    disponible:true,
    cantidad:1,categoria:'9',
    marca:'yurt',
 },{
    id:12,
    nombre:'LES PAUL',
    descripccion:'Potencia y expresión. Con sus selectores de pastillas y controles, explora un abanico enorme de sonidos en un solo instrumento.fruta, chocolate',
    precio:52478979,
    imagen:'https://solomusica.com.ar/sm2020/9107-large_default/gibson-les-paul-signature-120-anniversary-guitarra-electrica-.jpg',
    disponible:true,
    cantidad:1,categoria:'9',
    marca:'yurt',
 },{
    id:13,
    nombre:'STRATO GKL',
    descripccion:'Tonos infinitos. Fiel compañera de ensayo, composición y escenario. Siempre lista para la próxima canción. nnoononononononononononono',
    precio:235768,
    imagen:'https://www.heavenimagenes.com/heavencommerce/e11e0483-99c8-4ad2-b3a9-bfb26fc81402/images/v2/IBANEZ/2103171142315801_01_medium.jpg',
    disponible:true,
    cantidad:1,categoria:'9',
    marca:'yurt',
 },{
    id:14,
    nombre:'GTRS W800',
    descripccion:'El instrumento que te acompaña. Su acabado impactante y calidad sonora hacen que no pase desapercibida. Ideal para quienes buscan diferenciarse.',
    precio:678956732,
    imagen:'https://m.media-amazon.com/images/I/51AdAijoUhL.jpg',
    disponible:true,
    cantidad:1,categoria:'9',
    marca:'yurt',
 },{
    id:15,
    nombre:'EXPLORER-E-PRINCIPAL',
    descripccion:'Hecha para destacar. La esencia del rock y el blues, pero adaptada a los músicos de hoy. Una guitarra que combina lo mejor de dos mundos.nose, espacio',
    precio:235734,
    imagen:'https://mariogomez.com.ar/wp-content/uploads/2023/09/epiphone-explorer-e-principal.jpg',
    disponible:true,
    cantidad:1,categoria:'9',
    marca:'yurt',
 },{
    id:16,
    nombre:'SUPERSTRATO RG470AHM-BMT',
    descripccion:'Clásico renovado. Si te gusta jugar con efectos, amplificadores y texturas sonoras, esta guitarra es tu aliada ideal.salchipapa, que cosa tan pechocha',
    precio:78754,
    imagen:'https://www.pronorte.es/_files/product/24129/gallery1/guitarra-electrica-ibanez-rg470ahm-bmt-1.jpg',
    disponible:true,
    cantidad:1,categoria:'9',
    marca:'yurt',
 },{
    id:17,
    nombre:'EXPLORER BRUNSWICK-BLUE-SPARKLE',
    descripccion:' Perfecta para experimentar. El primer paso para crear tu propio camino musical. Una guitarra confiable, potente y hecha para expresarte.',
    precio:42343,
    imagen:'https://images.musicstore.de/images/1280/epiphone-explorer-brunswick-blue-sparkle_1_GIT0060968-000.jpg',
    disponible:true,
    cantidad:1,categoria:'9',
    marca:'yurt',
 },{
    id:18,
    nombre:'EXPLORER LETAVIO',
    descripccion:' Tu sonido empieza acá.La guitarra eléctrica ideal para quienes quieren un sonido definido y un diseño atemporal. Perfecta para cualquier estilo musical. letavio? gay',
    precio:34343456346,
    imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfuyQXaZE7qO9vSd7af3RoXtWMinYkOYf2XF7jLNv2GHbcy1ogC9hO82mjbmw8dV61OrQ&usqp=CAU',
    disponible:true,
    cantidad:1,categoria:'9',
    marca:'yurt',
 },{
    id:19,
    nombre:'EIGYVFDMDRBH3-3',
    descripccion:' Hecha para el escenario. Acabado brillante y detalles cuidados para destacar en cualquier escenario. Hecha para quienes cuidan el sonido y la estética.zapallo a la crema',
    precio:5829548,
    imagen:'https://makemusic.pe/wp-content/uploads/2024/12/EIGYVFDMDRBH3-3.jpg',
    disponible:true,
    cantidad:1,categoria:'9',
    marca:'yurt',
   
 }

 
 

]
constructor(private carritoService:CarritoService){}
  agregar(producto:aja){
    this.carritoService.agregarAlcarrito(producto)
    alert('producto agregado al carrito')
  }
   productoSeleccionado: any = null;
   seleccionarProducto(producto: any) {
    this.productoSeleccionado = producto;
  }
  cerrarDetalle() {
    this.productoSeleccionado = null;
  }

  searchTer:string='';

  selectedCategory:string='';
  selectedBrand:string='';
  minprecio:number | null=null;
  maxprecio: number | null=null;


  get categories():string[]{
   return [...new Set(this.productos.map(p=>p.categoria))]
}

get marca():string[]{
   return[...new Set(this.productos.map(p=>p.marca))]
}
onSearch(event:Event):void{
   event.preventDefault();
}

resetFilters():void{
   this.searchTer='';
   this.selectedCategory='';
   this.selectedBrand='';
   this.minprecio=null;
   this.maxprecio=null;

}

get filteredProducts():aja[]{
   return this.productos.filter(p=>
      (this.searchTer==='' || p.nombre.toLowerCase().includes(this.searchTer.toLowerCase()))&&
      (this.selectedCategory==='' || p.categoria===this.selectedCategory)&&
      (this.selectedBrand==='' || p.marca===this.selectedBrand)&&
      (this.minprecio===null || p.precio>=this.minprecio)&&
      (this.maxprecio===null || p.precio<=this.maxprecio )
   )
}
}



/* eslint-disable */
import {Model} from 'vue-mc'

export default class LugarModel extends Model {
  defaults () {
    return {
      titulo: '',
      ruta: '',
      nombreImagen: '',
    }
  }
}
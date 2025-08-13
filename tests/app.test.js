const test = require('node:test');
const assert = require('node:assert');
const { verificarTamañoVentana } = require('../src/js/app');

test('muestra el menú cuando el ancho es menor o igual a 480', () => {
  global.window = { innerWidth: 480 };
  global.desplegarMenu = { style: { display: 'none' } };
  verificarTamañoVentana();
  assert.strictEqual(global.desplegarMenu.style.display, 'block');
});

test('oculta el menú cuando el ancho es mayor a 480', () => {
  global.window = { innerWidth: 800 };
  global.desplegarMenu = { style: { display: 'block' } };
  verificarTamañoVentana();
  assert.strictEqual(global.desplegarMenu.style.display, 'none');
});

const express = require('express');
const path = require('path');
const xpApp = express();

const backend = require('../../dist/backend.js');

new backend.App(xpApp, express);

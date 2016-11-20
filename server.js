'use strict';

const liveserver = require('live-server');

const params = {
  root: './',
  open: true,
  port: 8080
};

liveserver.start(params);

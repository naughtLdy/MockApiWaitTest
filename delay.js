'use strict';

module.exports = function(delay, f){
  if(typeof f !== 'number') f = 0;
  return function(req, res, next){
    setTimeout(next, (delay + ((Math.random() * f) | 0)) * 1000);
  };
};

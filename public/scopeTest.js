'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var BabelTest = (function () {
  function BabelTest() {
    _classCallCheck(this, BabelTest);
  }

  _createClass(BabelTest, [{
    key: 'testFunction',
    value: function testFunction() {
      var _this = this;

      this.myVar = { myValue: 10 };
      var myFunc = function myFunc() {
        debugger;
        console.log(_this);
        // If you inspect 'this' with sourcemaps turned on it's shown as undefined
        // however it's correctly indirecting to the babel generated _this variable and
        // the code works as expected
        if (_this.myVar.myValue == 10) {
          console.log('As expected');
        }
      };

      myFunc();
    }
  }]);

  return BabelTest;
})();

exports.BabelTest = BabelTest;

new BabelTest().testFunction();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zY29wZVRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFhLFNBQVM7V0FBVCxTQUFTOzBCQUFULFNBQVM7OztlQUFULFNBQVM7O1dBR1Isd0JBQ1o7OztBQUNFLFVBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxPQUFPLEVBQUcsRUFBRSxFQUFFLENBQUM7QUFDOUIsVUFBSSxNQUFNLEdBQUcsU0FBVCxNQUFNLEdBQU87QUFDZixpQkFBUztBQUNULGVBQU8sQ0FBQyxHQUFHLE9BQU0sQ0FBQzs7OztBQUlsQixZQUFHLE1BQUssS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQzNCO0FBQ0UsaUJBQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDNUI7T0FDRixDQUFDOztBQUVGLFlBQU0sRUFBRSxDQUFDO0tBQ1Y7OztTQW5CVSxTQUFTOzs7OztBQXVCdEIsSUFBSSxTQUFTLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyIsImZpbGUiOiJzY29wZVRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQmFiZWxUZXN0XHJcbntcclxuXHJcbiAgdGVzdEZ1bmN0aW9uKClcclxuICB7XHJcbiAgICB0aGlzLm15VmFyID0geyBteVZhbHVlIDogMTAgfTtcclxuICAgIGxldCBteUZ1bmMgPSAoKT0+e1xyXG4gICAgICBkZWJ1Z2dlcjtcclxuICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgIC8vIElmIHlvdSBpbnNwZWN0ICd0aGlzJyB3aXRoIHNvdXJjZW1hcHMgdHVybmVkIG9uIGl0J3Mgc2hvd24gYXMgdW5kZWZpbmVkXHJcbiAgICAgIC8vIGhvd2V2ZXIgaXQncyBjb3JyZWN0bHkgaW5kaXJlY3RpbmcgdG8gdGhlIGJhYmVsIGdlbmVyYXRlZCBfdGhpcyB2YXJpYWJsZSBhbmRcclxuICAgICAgLy8gdGhlIGNvZGUgd29ya3MgYXMgZXhwZWN0ZWRcclxuICAgICAgaWYodGhpcy5teVZhci5teVZhbHVlID09IDEwKVxyXG4gICAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FzIGV4cGVjdGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgbXlGdW5jKCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxubmV3IEJhYmVsVGVzdCgpLnRlc3RGdW5jdGlvbigpO1xyXG4iXX0=
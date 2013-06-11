(function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b["indicator_graphic.hbs"]=a(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||a.helpers,e=e||{};var f="",g,h="function",i=this.escapeExpression;return f+="<h1>",(g=c.name)?g=g.call(b,{hash:{},data:e}):(g=b.name,g=typeof g===h?g.apply(b):g),f+=i(g)+'</h1>\n<div id="container"></div>\n',f}),b["maps.hbs"]=a(function(a,b,c,d,e){function k(a,b,d){var e="",f,g;return e+="\n  ",g={hash:{model:a},data:b},e+=i((f=c.addSubViewTo,f?f.call(a,d.view,"MapView",g):h.call(a,"addSubViewTo",d.view,"MapView",g)))+"\n",e}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||a.helpers,e=e||{};var f="",g,h=c.helperMissing,i=this.escapeExpression,j=this;f+="<h1>ESRI service graphics</h1>\n<p>\n  Graphics generated from JSON APIs based on ESRI services. I added axes data to\n  the basic layer descriptor to make automatic generation of graphics possible.\n  Check the README for details.\n</p>\n<a href='#' id=\"switch-to-environment\">Switch to envionment in pocket 'ideal' data</a>\n",g=c.each.call(b,b.models,{hash:{},inverse:j.noop,fn:j.programWithDepth(k,e,b),data:e});if(g||g===0)f+=g;return f+="\n",f}),b["map.hbs"]=a(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||a.helpers,e=e||{};var f="",g,h,i="function",j=this.escapeExpression,k=c.helperMissing;return f+="<h3>",(g=c.name)?g=g.call(b,{hash:{},data:e}):(g=b.name,g=typeof g===i?g.apply(b):g),f+=j(g)+" ESRI layer</h3>\n",h={hash:{esriIndicator:b.esriIndicator},data:e},f+=j((g=c.addSubViewTo,g?g.call(b,b.view,"EsriStackedColumnView",h):k.call(b,"addSubViewTo",b.view,"EsriStackedColumnView",h)))+"\n",h={hash:{esriIndicator:b.esriIndicator},data:e},f+=j((g=c.addSubViewTo,g?g.call(b,b.view,"EsriMapView",h):k.call(b,"addSubViewTo",b.view,"EsriMapView",h)))+"\n",f}),b["esri_map.hbs"]=a(function(a,b,c,d,e){return this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||a.helpers,e=e||{},'<h4>ESRI WMS map layer</h4>\n<div class="map"></div>\n'}),b["apiary_indicators_index.hbs"]=a(function(a,b,c,d,e){function k(a,b,d){var e="",f,g;return e+="\n  ",g={hash:{indicator:a},data:b},e+=i((f=c.addSubViewTo,f?f.call(a,d.thisView,"ApiaryIndicatorsRowView",g):h.call(a,"addSubViewTo",d.thisView,"ApiaryIndicatorsRowView",g)))+"\n",e}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||a.helpers,e=e||{};var f="",g,h=c.helperMissing,i=this.escapeExpression,j=this;f+="<h1>Apiary Indicators</h1>\n<p>These indicators back onto http://soerindicators.apiary.io</p>\n",g=c.each.call(b,b.indicators,{hash:{},inverse:j.noop,fn:j.programWithDepth(k,e,b),data:e});if(g||g===0)f+=g;return f+="\n",f}),b["apiary_indicators_row.hbs"]=a(function(a,b,c,d,e){function l(a,b,d){var e="",f,g;return e+="\n  ",g={hash:{indicator:d.indicator},data:b},e+=i((f=c.addSubViewTo,f?f.call(a,d.thisView,"ApiaryStackedColumnView",g):h.call(a,"addSubViewTo",d.thisView,"ApiaryStackedColumnView",g)))+"\n",e}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||a.helpers,e=e||{};var f="",g,h=c.helperMissing,i=this.escapeExpression,j="function",k=this;f+="<h1>",(g=c.indicatorName)?g=g.call(b,{hash:{},data:e}):(g=b.indicatorName,g=typeof g===j?g.apply(b):g),f+=i(g)+"</h1>\n",g=c["if"].call(b,b.results,{hash:{},inverse:k.noop,fn:k.programWithDepth(l,e,b),data:e});if(g||g===0)f+=g;return f+="\n",f}),b["main_graphics.hbs"]=a(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||a.helpers,e=e||{};var f="",g,h,i=c.helperMissing,j=this.escapeExpression;return f+="<h1>Environment in my Pocket</h1>\n<p>\n  This data is based on the data in the government 'Environement in my Pocket'\n  report. The JSON was constructed by hand, containing metadata and data API\n  points. The data was constructed to determine the viability of auto generating\n  maps, and what fields would be needed in the metadata description.\n</p>\n<a href='#' id=\"switch-to-esri\">Switch to esri layer indicators</a>\n",h={hash:{indicatorName:"recycling_rates"},data:e},f+=j((g=c.addSubViewTo,g?g.call(b,b.view,"StackedColumnView",h):i.call(b,"addSubViewTo",b.view,"StackedColumnView",h)))+"\n",h={hash:{indicatorName:"waste_by_sector"},data:e},f+=j((g=c.addSubViewTo,g?g.call(b,b.view,"PieChartView",h):i.call(b,"addSubViewTo",b.view,"PieChartView",h)))+"\n",h={hash:{indicatorName:"waste_by_sector"},data:e},f+=j((g=c.addSubViewTo,g?g.call(b,b.view,"StackedColumnView",h):i.call(b,"addSubViewTo",b.view,"StackedColumnView",h)))+"\n",f})})()

;
// Generated by CoffeeScript 1.6.2
(function() {
  var _base, _base1, _base10, _base11, _base12, _base13, _base14, _base15, _base16, _base2, _base3, _base4, _base5, _base6, _base7, _base8, _base9, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  (_base = window.Backbone).Models || (_base.Models = {});

  window.Backbone.Models.Indicator = (function(_super) {
    __extends(Indicator, _super);

    function Indicator() {
      _ref = Indicator.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Indicator.prototype.defaults = {
      name: '',
      metadata: null,
      data: null
    };

    Indicator.prototype.fetchAllData = function(successCallback) {
      var _this = this;

      return this.getMetadata(function(metadata) {
        _this.set('metadata', metadata);
        return _this.getData(function(data) {
          _this.set('data', data);
          return successCallback();
        });
      });
    };

    Indicator.prototype.getMetadata = function(successCallback) {
      return $.ajax({
        url: "json/indicators/" + (this.get('name')) + "/metadata.json"
      }).done(successCallback).fail(function(a, b, c) {
        return console.log("Error getting metdata!");
      });
    };

    Indicator.prototype.getData = function(successCallback) {
      return $.ajax({
        url: "json/indicators/" + (this.get('name')) + ".json"
      }).done(successCallback);
    };

    Indicator.prototype.getFullTitle = function() {
      return "" + (this.get('metadata')['full name']) + " (" + (this.get('metadata')["date published"]) + ")";
    };

    Indicator.prototype.getXAxisField = function() {
      return this.get('metadata').axes.x.fields[0];
    };

    Indicator.prototype.getYAxisField = function() {
      return this.get('metadata').axes.y.fields[0];
    };

    return Indicator;

  })(Backbone.Model);

  (_base1 = window.Backbone).Models || (_base1.Models = {});

  window.Backbone.Models.EsriIndicator = (function(_super) {
    __extends(EsriIndicator, _super);

    function EsriIndicator() {
      _ref1 = EsriIndicator.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    EsriIndicator.prototype.initialize = function(options) {
      this.serviceName = options.serviceName;
      return this.layer = options.layer;
    };

    EsriIndicator.prototype.getFullTitle = function() {
      return this.get('metadata').name;
    };

    EsriIndicator.prototype.getMetadata = function(successCallback) {
      return $.ajax({
        url: "json/map_indicators/" + (this.get('serviceName')) + "/MapServer/" + (this.get('layer')) + ".json"
      }).done(successCallback).fail(function(a, b, c) {
        return console.log("Error getting metdata!");
      });
    };

    EsriIndicator.prototype.getData = function(successCallback) {
      return $.ajax({
        url: "json/map_indicators/" + (this.get('serviceName')) + "/MapServer/" + (this.get('layer')) + "/find.json"
      }).done(successCallback);
    };

    EsriIndicator.prototype.getWMSAddress = function() {
      return "http://sampleserver1.arcgisonline.com/ArcGIS/services/Specialty/" + this.serviceName + "/MapServer/WMSServer";
    };

    return EsriIndicator;

  })(Backbone.Models.Indicator);

  (_base2 = window.Backbone).Models || (_base2.Models = {});

  window.Backbone.Models.ApiaryIndicator = (function(_super) {
    __extends(ApiaryIndicator, _super);

    function ApiaryIndicator() {
      _ref2 = ApiaryIndicator.__super__.constructor.apply(this, arguments);
      return _ref2;
    }

    ApiaryIndicator.prototype.apiAddress = 'http://soerindicators.apiary.io';

    ApiaryIndicator.prototype.resultUrl = function() {
      return "" + this.apiAddress + "/indicators/" + (this.get('id')) + "/query?where=objectid+>+0&returnGeometry=false&outFields=" + (this.requiredFields().join()) + "&f=pjson";
    };

    ApiaryIndicator.prototype.requiredFields = function() {
      return this.get('axes').x.fields;
    };

    ApiaryIndicator.prototype.getResults = function(successCallback) {
      var _this = this;

      return $.ajax({
        url: this.resultUrl()
      }).done(function(data) {
        _this.results = data;
        _this.trigger('resultsSync');
        if (successCallback != null) {
          return successCallback();
        }
      }).fail(function() {
        return console.log("Couldn't get indicator results");
      });
    };

    ApiaryIndicator.prototype.getXAxisField = function() {
      return this.get('axes').x.fields[0];
    };

    ApiaryIndicator.prototype.getYAxisField = function() {
      return this.get('axes').y.fields[0];
    };

    return ApiaryIndicator;

  })(Backbone.Model);

  window.Backbone || (window.Backbone = {});

  (_base3 = window.Backbone).Collections || (_base3.Collections = {});

  Backbone.Collections.ApiaryIndicatorCollection = (function(_super) {
    __extends(ApiaryIndicatorCollection, _super);

    function ApiaryIndicatorCollection() {
      _ref3 = ApiaryIndicatorCollection.__super__.constructor.apply(this, arguments);
      return _ref3;
    }

    ApiaryIndicatorCollection.prototype.model = Backbone.Models.ApiaryIndicator;

    ApiaryIndicatorCollection.prototype.apiAddress = 'http://wcmcindicatorapi.apiary.io';

    ApiaryIndicatorCollection.prototype.url = function() {
      return "" + this.apiAddress + "/indicators";
    };

    ApiaryIndicatorCollection.prototype.parse = function(data) {
      return data.indicators;
    };

    return ApiaryIndicatorCollection;

  })(Backbone.Collection);

  window.Backbone || (window.Backbone = {});

  (_base4 = window.Backbone).Views || (_base4.Views = {});

  Backbone.Views.IndicatorGraphicView = (function(_super) {
    __extends(IndicatorGraphicView, _super);

    function IndicatorGraphicView() {
      this.render = __bind(this.render, this);      _ref4 = IndicatorGraphicView.__super__.constructor.apply(this, arguments);
      return _ref4;
    }

    IndicatorGraphicView.prototype.template = Handlebars.templates['indicator_graphic.hbs'];

    IndicatorGraphicView.prototype.initialize = function(options) {
      this.indicator = new Backbone.Models.Indicator({
        name: options.indicatorName
      });
      return this.indicator.fetchAllData(this.render);
    };

    IndicatorGraphicView.prototype.render = function() {
      this.$el.html(this.template({
        name: this.indicator.get('name')
      }));
      this.drawGraph();
      return this;
    };

    IndicatorGraphicView.prototype.onClose = function() {};

    return IndicatorGraphicView;

  })(Backbone.View);

  window.Backbone || (window.Backbone = {});

  (_base5 = window.Backbone).Views || (_base5.Views = {});

  Backbone.Views.StackedColumnView = (function(_super) {
    __extends(StackedColumnView, _super);

    function StackedColumnView() {
      _ref5 = StackedColumnView.__super__.constructor.apply(this, arguments);
      return _ref5;
    }

    StackedColumnView.prototype.getCategoriesFromIndicator = function() {
      var categories, entry, xAxisField, _i, _len, _ref6;

      xAxisField = this.indicator.getXAxisField();
      categories = [];
      _ref6 = this.indicator.get('data');
      for (_i = 0, _len = _ref6.length; _i < _len; _i++) {
        entry = _ref6[_i];
        categories.push(entry[xAxisField]);
      }
      return categories;
    };

    StackedColumnView.prototype.getSeriesFromIndicator = function() {
      var entry, fieldName, group, series, xAxisField, _i, _j, _len, _len1, _ref6, _ref7;

      xAxisField = this.indicator.getXAxisField();
      series = [];
      _ref6 = this.indicator.get('metadata').axes.y.fields;
      for (_i = 0, _len = _ref6.length; _i < _len; _i++) {
        fieldName = _ref6[_i];
        group = {
          name: fieldName,
          data: []
        };
        _ref7 = this.indicator.get('data');
        for (_j = 0, _len1 = _ref7.length; _j < _len1; _j++) {
          entry = _ref7[_j];
          group.data.push(entry[fieldName]);
        }
        series.push(group);
      }
      return series;
    };

    StackedColumnView.prototype.drawGraph = function() {
      if (this.indicator.get('metadata') == null) {
        return;
      }
      return this.$el.find("#container").highcharts({
        chart: {
          type: "column"
        },
        title: {
          text: this.indicator.getFullTitle()
        },
        xAxis: {
          categories: this.getCategoriesFromIndicator(),
          title: {
            text: this.indicator.get('metadata').axes.x.name
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: this.indicator.get('metadata').axes.y.name
          },
          stackLabels: {
            enabled: true,
            style: {
              fontWeight: "bold",
              color: (Highcharts.theme && Highcharts.theme.textColor) || "gray"
            }
          }
        },
        legend: {
          align: "right",
          x: -100,
          verticalAlign: "top",
          y: 20,
          floating: true,
          backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || "white",
          borderColor: "#CCC",
          borderWidth: 1,
          shadow: false
        },
        tooltip: {
          formatter: function() {
            return "<b>" + this.x + "</b><br/>" + this.series.name + ": " + this.y + "<br/>" + "Total: " + this.point.stackTotal;
          }
        },
        plotOptions: {
          column: {
            stacking: "normal",
            dataLabels: {
              enabled: true,
              color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || "white"
            }
          }
        },
        series: this.getSeriesFromIndicator()
      });
    };

    return StackedColumnView;

  })(Backbone.Views.IndicatorGraphicView);

  window.Backbone || (window.Backbone = {});

  (_base6 = window.Backbone).Views || (_base6.Views = {});

  Backbone.Views.PieChartView = (function(_super) {
    __extends(PieChartView, _super);

    function PieChartView() {
      _ref6 = PieChartView.__super__.constructor.apply(this, arguments);
      return _ref6;
    }

    PieChartView.prototype.getSeriesFromIndicator = function() {
      var entry, series, xAxisField, yAxisField, _i, _len, _ref7;

      xAxisField = this.indicator.getXAxisField();
      yAxisField = this.indicator.getYAxisField();
      series = [];
      _ref7 = this.indicator.get('data');
      for (_i = 0, _len = _ref7.length; _i < _len; _i++) {
        entry = _ref7[_i];
        series.push([entry[xAxisField], entry[yAxisField]]);
      }
      return series;
    };

    PieChartView.prototype.drawGraph = function() {
      var xAxisField;

      if (this.indicator.get('metadata') == null) {
        return;
      }
      xAxisField = this.indicator.getXAxisField();
      return this.$el.find("#container").highcharts({
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
        },
        title: {
          text: this.indicator.getFullTitle()
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage}%</b>",
          percentageDecimals: 1
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              color: "#000000",
              connectorColor: "#000000",
              formatter: function() {
                var name;

                name = this.point.name === 'Slice' ? this.point.x : this.point.name;
                return "<b>" + name + "</b>: " + this.percentage + " %";
              }
            }
          }
        },
        series: [
          {
            type: "pie",
            name: this.indicator.get('metadata')['full name'],
            data: this.getSeriesFromIndicator()
          }
        ]
      });
    };

    return PieChartView;

  })(Backbone.Views.IndicatorGraphicView);

  window.Backbone || (window.Backbone = {});

  (_base7 = window.Backbone).Views || (_base7.Views = {});

  Backbone.Views.EsriMapIndicatorGraphicView = (function(_super) {
    __extends(EsriMapIndicatorGraphicView, _super);

    function EsriMapIndicatorGraphicView() {
      this.render = __bind(this.render, this);      _ref7 = EsriMapIndicatorGraphicView.__super__.constructor.apply(this, arguments);
      return _ref7;
    }

    EsriMapIndicatorGraphicView.prototype.template = Handlebars.templates['indicator_graphic.hbs'];

    EsriMapIndicatorGraphicView.prototype.initialize = function(options) {
      this.indicator = options.esriIndicator;
      return this.render();
    };

    EsriMapIndicatorGraphicView.prototype.render = function() {
      this.$el.html(this.template({
        name: this.indicator.get('metadata').name
      }));
      this.drawGraph();
      return this;
    };

    EsriMapIndicatorGraphicView.prototype.onClose = function() {};

    return EsriMapIndicatorGraphicView;

  })(Backbone.View);

  window.Backbone || (window.Backbone = {});

  (_base8 = window.Backbone).Views || (_base8.Views = {});

  Backbone.Views.EsriStackedColumnView = (function(_super) {
    __extends(EsriStackedColumnView, _super);

    function EsriStackedColumnView() {
      _ref8 = EsriStackedColumnView.__super__.constructor.apply(this, arguments);
      return _ref8;
    }

    EsriStackedColumnView.prototype.getCategoriesFromIndicator = function() {
      var categories, entry, xAxisField, _i, _len, _ref9;

      xAxisField = this.indicator.getXAxisField();
      categories = [];
      _ref9 = this.indicator.get('data').results;
      for (_i = 0, _len = _ref9.length; _i < _len; _i++) {
        entry = _ref9[_i];
        categories.push(entry.attributes[xAxisField]);
      }
      return categories;
    };

    EsriStackedColumnView.prototype.getSeriesFromIndicator = function() {
      var entry, fieldName, group, series, xAxisField, _i, _j, _len, _len1, _ref10, _ref9;

      xAxisField = this.indicator.getXAxisField();
      series = [];
      _ref9 = this.indicator.get('metadata').axes.y.fields;
      for (_i = 0, _len = _ref9.length; _i < _len; _i++) {
        fieldName = _ref9[_i];
        group = {
          name: fieldName,
          data: []
        };
        _ref10 = this.indicator.get('data').results;
        for (_j = 0, _len1 = _ref10.length; _j < _len1; _j++) {
          entry = _ref10[_j];
          group.data.push(parseFloat(entry.attributes[fieldName], 10));
        }
        series.push(group);
      }
      return series;
    };

    EsriStackedColumnView.prototype.drawGraph = function() {
      if (this.indicator.get('metadata') == null) {
        return;
      }
      return this.$el.find("#container").highcharts({
        chart: {
          type: "column"
        },
        title: {
          text: this.indicator.getFullTitle()
        },
        xAxis: {
          categories: this.getCategoriesFromIndicator(),
          title: {
            text: this.indicator.get('metadata').axes.x.name
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: this.indicator.get('metadata').axes.y.name
          },
          stackLabels: {
            enabled: true,
            style: {
              fontWeight: "bold",
              color: (Highcharts.theme && Highcharts.theme.textColor) || "gray"
            }
          }
        },
        legend: {
          align: "right",
          x: -100,
          verticalAlign: "top",
          y: 20,
          floating: true,
          backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || "white",
          borderColor: "#CCC",
          borderWidth: 1,
          shadow: false
        },
        tooltip: {
          formatter: function() {
            return "<b>" + this.x + "</b><br/>" + this.series.name + ": " + this.y + "<br/>" + "Total: " + this.point.stackTotal;
          }
        },
        plotOptions: {
          column: {
            stacking: "normal",
            dataLabels: {
              enabled: true,
              color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || "white"
            }
          }
        },
        series: this.getSeriesFromIndicator()
      });
    };

    return EsriStackedColumnView;

  })(Backbone.Views.EsriMapIndicatorGraphicView);

  window.Backbone || (window.Backbone = {});

  (_base9 = window.Backbone).Views || (_base9.Views = {});

  Backbone.Views.ApiaryStackedColumnView = (function(_super) {
    __extends(ApiaryStackedColumnView, _super);

    function ApiaryStackedColumnView() {
      this.render = __bind(this.render, this);      _ref9 = ApiaryStackedColumnView.__super__.constructor.apply(this, arguments);
      return _ref9;
    }

    ApiaryStackedColumnView.prototype.template = Handlebars.templates['indicator_graphic.hbs'];

    ApiaryStackedColumnView.prototype.initialize = function(options) {
      this.indicator = options.indicator;
      return this.render();
    };

    ApiaryStackedColumnView.prototype.render = function() {
      this.$el.html(this.template({
        name: this.indicator.get('name')
      }));
      this.drawGraph();
      return this;
    };

    ApiaryStackedColumnView.prototype.getCategoriesFromIndicator = function() {
      var categories, entry, xAxisField, _i, _len, _ref10;

      xAxisField = this.indicator.getXAxisField();
      categories = [];
      _ref10 = this.indicator.results.features;
      for (_i = 0, _len = _ref10.length; _i < _len; _i++) {
        entry = _ref10[_i];
        categories.push(entry.attributes[xAxisField]);
      }
      console.log(categories);
      return categories;
    };

    ApiaryStackedColumnView.prototype.getSeriesFromIndicator = function() {
      var entry, fieldName, group, series, xAxisField, _i, _len, _ref10;

      xAxisField = this.indicator.getXAxisField();
      series = [];
      fieldName = this.indicator.getYAxisField();
      group = {
        name: fieldName,
        data: []
      };
      _ref10 = this.indicator.results.features;
      for (_i = 0, _len = _ref10.length; _i < _len; _i++) {
        entry = _ref10[_i];
        group.data.push(parseFloat(entry.attributes[fieldName], 10));
      }
      series.push(group);
      console.log(series);
      return series;
    };

    ApiaryStackedColumnView.prototype.drawGraph = function() {
      return this.$el.find("#container").highcharts({
        chart: {
          type: "column"
        },
        title: {
          text: this.indicator.get('name')
        },
        xAxis: {
          categories: this.getCategoriesFromIndicator(),
          title: {
            text: this.indicator.getXAxisField()
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: this.indicator.getYAxisField()
          },
          stackLabels: {
            enabled: true,
            style: {
              fontWeight: "bold",
              color: (Highcharts.theme && Highcharts.theme.textColor) || "gray"
            }
          }
        },
        legend: {
          align: "right",
          x: -100,
          verticalAlign: "top",
          y: 20,
          floating: true,
          backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || "white",
          borderColor: "#CCC",
          borderWidth: 1,
          shadow: false
        },
        tooltip: {
          formatter: function() {
            return "<b>" + this.x + "</b><br/>" + this.series.name + ": " + this.y + "<br/>" + "Total: " + this.point.stackTotal;
          }
        },
        plotOptions: {
          column: {
            stacking: "normal",
            dataLabels: {
              enabled: true,
              color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || "white"
            }
          }
        },
        series: this.getSeriesFromIndicator()
      });
    };

    return ApiaryStackedColumnView;

  })(Backbone.View);

  window.Backbone || (window.Backbone = {});

  (_base10 = window.Backbone).Views || (_base10.Views = {});

  Backbone.Views.MapsView = (function(_super) {
    __extends(MapsView, _super);

    function MapsView() {
      this.triggerSwitchToEnvironment = __bind(this.triggerSwitchToEnvironment, this);
      this.render = __bind(this.render, this);      _ref10 = MapsView.__super__.constructor.apply(this, arguments);
      return _ref10;
    }

    MapsView.prototype.template = Handlebars.templates['maps.hbs'];

    MapsView.prototype.events = {
      "click #switch-to-environment": "triggerSwitchToEnvironment"
    };

    MapsView.prototype.initialize = function(options) {
      this.esriIndicators = [];
      this.esriIndicators.push(new Backbone.Models.EsriIndicator({
        serviceName: "ESRI_StateCityHighway_USA",
        layer: 1
      }));
      return this.esriIndicators.push(new Backbone.Models.EsriIndicator({
        serviceName: "ESRI_StateCityHighway_USA",
        layer: 0
      }));
    };

    MapsView.prototype.render = function() {
      this.closeSubViews();
      this.$el.html(this.template({
        view: this,
        models: this.esriIndicators
      }));
      this.renderSubViews();
      return this;
    };

    MapsView.prototype.triggerSwitchToEnvironment = function() {
      return this.trigger('switchToEnvironment');
    };

    MapsView.prototype.onClose = function() {
      return this.closeSubViews();
    };

    return MapsView;

  })(Backbone.Diorama.NestingView);

  window.Backbone || (window.Backbone = {});

  (_base11 = window.Backbone).Views || (_base11.Views = {});

  Backbone.Views.MapView = (function(_super) {
    __extends(MapView, _super);

    function MapView() {
      this.render = __bind(this.render, this);      _ref11 = MapView.__super__.constructor.apply(this, arguments);
      return _ref11;
    }

    MapView.prototype.template = Handlebars.templates['map.hbs'];

    MapView.prototype.initialize = function(options) {
      this.esriIndicator = options.model;
      return this.esriIndicator.fetchAllData(this.render);
    };

    MapView.prototype.render = function() {
      if (this.esriIndicator.get('metadata') != null) {
        this.closeSubViews();
        this.$el.html(this.template({
          view: this,
          name: this.esriIndicator.get('metadata').name,
          esriIndicator: this.esriIndicator
        }));
        this.renderSubViews();
        window.mapView = this;
      }
      return this;
    };

    MapView.prototype.onClose = function() {
      return this.closeSubViews();
    };

    return MapView;

  })(Backbone.Diorama.NestingView);

  window.Backbone || (window.Backbone = {});

  (_base12 = window.Backbone).Views || (_base12.Views = {});

  Backbone.Views.EsriMapView = (function(_super) {
    __extends(EsriMapView, _super);

    function EsriMapView() {
      this.render = __bind(this.render, this);      _ref12 = EsriMapView.__super__.constructor.apply(this, arguments);
      return _ref12;
    }

    EsriMapView.prototype.template = Handlebars.templates['esri_map.hbs'];

    EsriMapView.prototype.initialize = function(options) {
      return this.esriIndicator = options.esriIndicator;
    };

    EsriMapView.prototype.render = function() {
      this.$el.html(this.template());
      this.createMap();
      return this;
    };

    EsriMapView.prototype.createMap = function() {
      this.map = L.map(this.$el.find(".map")[0], {
        scrollWheelZoom: false
      }).setView([41.508577, -99.84375], 5);
      L.tileLayer("http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png").addTo(this.map);
      return L.tileLayer.wms(this.esriIndicator.getWMSAddress(), {
        layers: this.esriIndicator.layer,
        format: 'image/png',
        transparent: true
      }).addTo(this.map);
    };

    EsriMapView.prototype.onClose = function() {};

    return EsriMapView;

  })(Backbone.View);

  window.Backbone || (window.Backbone = {});

  (_base13 = window.Backbone).Views || (_base13.Views = {});

  Backbone.Views.ApiaryIndicatorsIndexView = (function(_super) {
    __extends(ApiaryIndicatorsIndexView, _super);

    function ApiaryIndicatorsIndexView() {
      this.render = __bind(this.render, this);      _ref13 = ApiaryIndicatorsIndexView.__super__.constructor.apply(this, arguments);
      return _ref13;
    }

    ApiaryIndicatorsIndexView.prototype.template = Handlebars.templates['apiary_indicators_index.hbs'];

    ApiaryIndicatorsIndexView.prototype.initialize = function(options) {
      this.indicators = options.indicators;
      this.indicators.on('sync', this.render);
      return this.indicators.fetch().fail(function(a, b, c) {
        return console.log("uh oh!");
      });
    };

    ApiaryIndicatorsIndexView.prototype.render = function() {
      this.closeSubViews();
      this.$el.html(this.template({
        thisView: this,
        indicators: this.indicators.models
      }));
      this.renderSubViews();
      return this;
    };

    ApiaryIndicatorsIndexView.prototype.onClose = function() {
      this.indicators.off('sync', this.render);
      return this.closeSubViews();
    };

    return ApiaryIndicatorsIndexView;

  })(Backbone.Diorama.NestingView);

  window.Backbone || (window.Backbone = {});

  (_base14 = window.Backbone).Views || (_base14.Views = {});

  Backbone.Views.ApiaryIndicatorsRowView = (function(_super) {
    __extends(ApiaryIndicatorsRowView, _super);

    function ApiaryIndicatorsRowView() {
      this.render = __bind(this.render, this);      _ref14 = ApiaryIndicatorsRowView.__super__.constructor.apply(this, arguments);
      return _ref14;
    }

    ApiaryIndicatorsRowView.prototype.template = Handlebars.templates['apiary_indicators_row.hbs'];

    ApiaryIndicatorsRowView.prototype.initialize = function(options) {
      this.indicator = options.indicator;
      this.indicator.on('resultsSync', this.render);
      return this.indicator.getResults();
    };

    ApiaryIndicatorsRowView.prototype.render = function() {
      this.closeSubViews();
      this.$el.html(this.template({
        thisView: this,
        indicatorName: this.indicator.get('name'),
        indicator: this.indicator,
        results: this.indicator.results
      }));
      this.renderSubViews();
      return this;
    };

    ApiaryIndicatorsRowView.prototype.onClose = function() {
      this.closeSubViews();
      this.indicator.off('fetch', this.render);
      return this.indicator.off('resultsSync', this.render);
    };

    return ApiaryIndicatorsRowView;

  })(Backbone.Diorama.NestingView);

  window.Backbone || (window.Backbone = {});

  (_base15 = window.Backbone).Controllers || (_base15.Controllers = {});

  Backbone.Controllers.MainController = (function(_super) {
    __extends(MainController, _super);

    function MainController() {
      this.apiary = __bind(this.apiary, this);
      this.esri = __bind(this.esri, this);
      this.environment = __bind(this.environment, this);      $.defaultAjax = $.ajax;
      $.ajax = function(options) {
        options.contentType || (options.contentType = 'application/json');
        return $.defaultAjax(options);
      };
      this.mainRegion = new Backbone.Diorama.ManagedRegion();
      $('body').append(this.mainRegion.$el);
      this.apiary();
    }

    MainController.prototype.environment = function() {
      var graphicsView;

      graphicsView = new Backbone.Views.MainGraphicsView();
      this.mainRegion.showView(graphicsView);
      return this.changeStateOn({
        event: 'switchToEsri',
        publisher: graphicsView,
        newState: this.esri
      });
    };

    MainController.prototype.esri = function() {
      var mapsView;

      mapsView = new Backbone.Views.MapsView();
      this.mainRegion.showView(mapsView);
      return this.changeStateOn({
        event: 'switchToEnvironment',
        publisher: mapsView,
        newState: this.environment
      });
    };

    MainController.prototype.apiary = function() {
      var apiaryIndicatorIndexView, apiaryIndicators;

      apiaryIndicators = new Backbone.Collections.ApiaryIndicatorCollection();
      apiaryIndicatorIndexView = new Backbone.Views.ApiaryIndicatorsIndexView({
        indicators: apiaryIndicators
      });
      this.mainRegion.showView(apiaryIndicatorIndexView);
      return this.changeStateOn();
    };

    return MainController;

  })(Backbone.Diorama.Controller);

  window.Backbone || (window.Backbone = {});

  (_base16 = window.Backbone).Views || (_base16.Views = {});

  Backbone.Views.MainGraphicsView = (function(_super) {
    __extends(MainGraphicsView, _super);

    function MainGraphicsView() {
      _ref15 = MainGraphicsView.__super__.constructor.apply(this, arguments);
      return _ref15;
    }

    MainGraphicsView.prototype.template = Handlebars.templates['main_graphics.hbs'];

    MainGraphicsView.prototype.events = {
      "click #switch-to-esri": "triggerSwitchToEsri"
    };

    MainGraphicsView.prototype.initialize = function(options) {
      return this.render();
    };

    MainGraphicsView.prototype.render = function() {
      this.closeSubViews();
      this.$el.html(this.template({
        view: this
      }));
      this.renderSubViews();
      return this;
    };

    MainGraphicsView.prototype.triggerSwitchToEsri = function() {
      return this.trigger('switchToEsri');
    };

    MainGraphicsView.prototype.onClose = function() {
      return this.closeSubViews();
    };

    return MainGraphicsView;

  })(Backbone.Diorama.NestingView);

}).call(this);

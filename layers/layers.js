var wms_layers = [];


        var lyr_EsriSatellite_0 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LimiteSenegal_1 = new ol.format.GeoJSON();
var features_LimiteSenegal_1 = format_LimiteSenegal_1.readFeatures(json_LimiteSenegal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteSenegal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteSenegal_1.addFeatures(features_LimiteSenegal_1);
var lyr_LimiteSenegal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteSenegal_1, 
                style: style_LimiteSenegal_1,
                popuplayertitle: 'Limite Senegal',
                interactive: true,
                title: '<img src="styles/legend/LimiteSenegal_1.png" /> Limite Senegal'
            });
var lyr_carteinsuffisancealimentation_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'carte insuffisance alimentation<br />\
    <img src="styles/legend/carteinsuffisancealimentation_2_0.png" /> Tres faible<br />\
    <img src="styles/legend/carteinsuffisancealimentation_2_1.png" /> Faible<br />\
    <img src="styles/legend/carteinsuffisancealimentation_2_2.png" /> Moyen<br />\
    <img src="styles/legend/carteinsuffisancealimentation_2_3.png" /> fort<br />\
    <img src="styles/legend/carteinsuffisancealimentation_2_4.png" /> Tres fort<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/carteinsuffisancealimentation_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1952898.532412, 1380764.982920, -1261822.135952, 1885009.646531]
        })
    });
var format_Limitesregions_3 = new ol.format.GeoJSON();
var features_Limitesregions_3 = format_Limitesregions_3.readFeatures(json_Limitesregions_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitesregions_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesregions_3.addFeatures(features_Limitesregions_3);
var lyr_Limitesregions_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesregions_3, 
                style: style_Limitesregions_3,
                popuplayertitle: 'Limites regions',
                interactive: true,
                title: '<img src="styles/legend/Limitesregions_3.png" /> Limites regions'
            });

lyr_EsriSatellite_0.setVisible(true);lyr_LimiteSenegal_1.setVisible(true);lyr_carteinsuffisancealimentation_2.setVisible(true);lyr_Limitesregions_3.setVisible(true);
var layersList = [lyr_EsriSatellite_0,lyr_LimiteSenegal_1,lyr_carteinsuffisancealimentation_2,lyr_Limitesregions_3];
lyr_LimiteSenegal_1.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_Limitesregions_3.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_LimiteSenegal_1.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_Limitesregions_3.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_LimiteSenegal_1.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_Limitesregions_3.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'inline label - always visible', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_Limitesregions_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
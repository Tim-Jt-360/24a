(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.')['map'](function (r) {
                        return r['trim']();
                    }), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer"],"class":"Player","id":"rootPlayer","data":{"locales":{"es":"locale/es.txt"},"name":"Player741","textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"rate":1,"volume":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"speechOnInfoWindow":false},"history":{},"displayTooltipInTouchScreens":true,"defaultLocale":"es"},"hash": "bad39fbb26c6b7992a1d3f50ef546d2cc193af54f8a6498a871622046b53f8f8", "definitions": [{"keepModel3DLoadedWithoutLocation":true,"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","class":"PanoramaPlayer","arrowKeysAction":"translate","aaEnabled":true,"id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"mouseControlMode":"drag_rotation"},{"playbackBarHeadWidth":6,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBorderSize":0,"playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesFontFamily":"Arial","playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"firstTransitionDuration":0,"surfaceReticleColor":"#FFFFFF","data":{"name":"Main Viewer"},"playbackBarHeadShadowOpacity":0.7,"propagateClick":false,"toolTipBorderColor":"#767676","playbackBarProgressBackgroundColorRatios":[0],"subtitlesTextShadowHorizontalLength":1,"playbackBarBorderColor":"#FFFFFF","toolTipPaddingTop":4,"playbackBarProgressBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"playbackBarBorderRadius":0,"toolTipFontSize":"1.11vmin","progressBackgroundColorRatios":[0],"vrPointerSelectionColor":"#FF6600","subtitlesGap":0,"subtitlesBackgroundColor":"#000000","progressRight":"33%","toolTipPaddingBottom":4,"playbackBarHeadBorderColor":"#000000","progressOpacity":0.7,"progressBarBackgroundColorDirection":"horizontal","playbackBarHeadBorderRadius":0,"playbackBarHeadShadowHorizontalLength":0,"toolTipPaddingRight":6,"playbackBarBorderSize":0,"progressBarBorderColor":"#000000","subtitlesTextShadowOpacity":1,"progressBarBackgroundColorRatios":[0],"vrPointerSelectionTime":2000,"subtitlesFontColor":"#FFFFFF","toolTipShadowColor":"#333138","progressBorderColor":"#000000","subtitlesTop":0,"class":"ViewerArea","playbackBarHeadShadowBlurRadius":3,"id":"MainViewer","subtitlesTextShadowColor":"#000000","toolTipFontFamily":"Arial","playbackBarBackgroundOpacity":1,"progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"playbackBarHeadHeight":15,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"progressBottom":10,"progressHeight":2,"progressBorderSize":0,"playbackBarLeft":0,"playbackBarHeadBorderSize":0,"playbackBarHeadShadow":true,"playbackBarHeadShadowColor":"#000000","toolTipBackgroundColor":"#F6F6F6","minHeight":50,"subtitlesBottom":50,"minWidth":100,"progressBarBorderRadius":2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBorderSize":0,"playbackBarBottom":5,"height":"100%","toolTipTextShadowColor":"#000000","toolTipPaddingLeft":6,"vrPointerColor":"#FFFFFF","width":"100%","toolTipFontColor":"#606060","progressBorderRadius":2,"playbackBarBackgroundColor":["#FFFFFF"],"vrThumbstickRotationStep":20,"playbackBarHeight":10,"progressLeft":"33%","playbackBarHeadShadowVerticalLength":0},{"id":"mainPlayList","items":[{"class":"PanoramaPlayListItem","media":"this.panorama_1EEF3BCA_1577_BFD6_4193_03401391E35D","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_1EEF3BCA_1577_BFD6_4193_03401391E35D_camera"}],"class":"PlayList"},{"hfov":360,"thumbnailUrl":"media/panorama_1EEF3BCA_1577_BFD6_4193_03401391E35D_t.webp","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_1EEF3BCA_1577_BFD6_4193_03401391E35D_t.webp","cube":{"levels":[{"height":4096,"url":"media/panorama_1EEF3BCA_1577_BFD6_4193_03401391E35D_0/{face}/0/{row}_{column}.webp","colCount":48,"rowCount":8,"class":"TiledImageResourceLevel","width":24576,"tags":"ondemand"},{"height":2048,"url":"media/panorama_1EEF3BCA_1577_BFD6_4193_03401391E35D_0/{face}/1/{row}_{column}.webp","colCount":24,"rowCount":4,"class":"TiledImageResourceLevel","width":12288,"tags":"ondemand"},{"height":1024,"url":"media/panorama_1EEF3BCA_1577_BFD6_4193_03401391E35D_0/{face}/2/{row}_{column}.webp","colCount":12,"rowCount":2,"class":"TiledImageResourceLevel","width":6144,"tags":"ondemand"},{"height":512,"url":"media/panorama_1EEF3BCA_1577_BFD6_4193_03401391E35D_0/{face}/3/{row}_{column}.webp","colCount":6,"rowCount":1,"class":"TiledImageResourceLevel","width":3072,"tags":["ondemand","preload"]}],"class":"ImageResource"}}],"vfov":180,"data":{"label":"Sch\u00fcepwis 24a"},"class":"Panorama","hfovMax":130,"label":trans('panorama_1EEF3BCA_1577_BFD6_4193_03401391E35D.label'),"id":"panorama_1EEF3BCA_1577_BFD6_4193_03401391E35D"},{"enterPointingToHorizon":true,"class":"PanoramaCamera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"initialSequence":"this.sequence_1B5D3865_107B_49B6_4184_0714C4E14F61","id":"panorama_1EEF3BCA_1577_BFD6_4193_03401391E35D_camera"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_1B5D3865_107B_49B6_4184_0714C4E14F61"}],"backgroundColor":["#FFFFFF"],"start":"this.init()","layout":"absolute","scrollBarMargin":2,"propagateClick":false,"watermark":false,"xrPanelsEnabled":true,"backgroundColorRatios":[0],"minHeight":0,"minWidth":0,"gap":10,"defaultMenu":["fullscreen","mute","rotation"],"height":"100%","scrollBarColor":"#000000","scripts":{"isComponentVisible":TDV.Tour.Script.isComponentVisible,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"clone":TDV.Tour.Script.clone,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"downloadFile":TDV.Tour.Script.downloadFile,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"historyGoForward":TDV.Tour.Script.historyGoForward,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"openLink":TDV.Tour.Script.openLink,"textToSpeech":TDV.Tour.Script.textToSpeech,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPixels":TDV.Tour.Script.getPixels,"setValue":TDV.Tour.Script.setValue,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"playAudioList":TDV.Tour.Script.playAudioList,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"initQuiz":TDV.Tour.Script.initQuiz,"unloadViewer":TDV.Tour.Script.unloadViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showWindowBase":TDV.Tour.Script.showWindowBase,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getMainViewer":TDV.Tour.Script.getMainViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getKey":TDV.Tour.Script.getKey,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"existsKey":TDV.Tour.Script.existsKey,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"init":TDV.Tour.Script.init,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"isPanorama":TDV.Tour.Script.isPanorama,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"disableVR":TDV.Tour.Script.disableVR,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"showWindow":TDV.Tour.Script.showWindow,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizShowScore":TDV.Tour.Script.quizShowScore,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"quizStart":TDV.Tour.Script.quizStart,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"toggleVR":TDV.Tour.Script.toggleVR,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"unregisterKey":TDV.Tour.Script.unregisterKey,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"shareSocial":TDV.Tour.Script.shareSocial,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"historyGoBack":TDV.Tour.Script.historyGoBack,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"resumePlayers":TDV.Tour.Script.resumePlayers,"createTween":TDV.Tour.Script.createTween,"setMapLocation":TDV.Tour.Script.setMapLocation,"initAnalytics":TDV.Tour.Script.initAnalytics,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizFinish":TDV.Tour.Script.quizFinish,"cloneBindings":TDV.Tour.Script.cloneBindings,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"executeJS":TDV.Tour.Script.executeJS,"startMeasurement":TDV.Tour.Script.startMeasurement,"mixObject":TDV.Tour.Script.mixObject,"translate":TDV.Tour.Script.translate,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getComponentByName":TDV.Tour.Script.getComponentByName,"getOverlays":TDV.Tour.Script.getOverlays,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"registerKey":TDV.Tour.Script.registerKey,"enableVR":TDV.Tour.Script.enableVR,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setLocale":TDV.Tour.Script.setLocale},"width":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.2, Wed Oct 7 2026
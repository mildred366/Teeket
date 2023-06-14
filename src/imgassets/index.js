
        const tryRequire = (path) => {
        	try {
        	const image = require(`${path}`);
        	return image
        	} catch (err) {
        	return false
        	}
        };

        export default {
        
	questionMark: require('./questionMark.png'),
	MobileEventListingPage_Elipse: tryRequire('./MobileEventListingPage_Elipse.png') || require('./questionMark.png'),
	MobileEventListingPage_music_note_1: tryRequire('./MobileEventListingPage_music_note_1.png') || require('./questionMark.png'),
	MobileEventListingPage_music_note_3: tryRequire('./MobileEventListingPage_music_note_3.png') || require('./questionMark.png'),
	MobileEventListingPage_music_note_5: tryRequire('./MobileEventListingPage_music_note_5.png') || require('./questionMark.png'),
	MobileEventListingPage_Image: tryRequire('./MobileEventListingPage_Image.png') || require('./questionMark.png'),
	MobileEventListingPage_unsplashUz8THWPXwhI: tryRequire('./MobileEventListingPage_unsplashUz8THWPXwhI.png') || require('./questionMark.png'),
	MobileEventListingPage_image14: tryRequire('./MobileEventListingPage_image14.png') || require('./questionMark.png'),
	MobileEventListingPage_image6: tryRequire('./MobileEventListingPage_image6.png') || require('./questionMark.png'),
	MobileEventListingPage_unsplashBUPaAMSOdE: tryRequire('./MobileEventListingPage_unsplashBUPaAMSOdE.png') || require('./questionMark.png'),
	MobileEventListingPage_unsplashA7Hb52SnTQ: tryRequire('./MobileEventListingPage_unsplashA7Hb52SnTQ.png') || require('./questionMark.png'),
	MobileEventListingPage_Vector2: tryRequire('./MobileEventListingPage_Vector2.png') || require('./questionMark.png'),
	MobileEventListingPage_Vector: tryRequire('./MobileEventListingPage_Vector.png') || require('./questionMark.png'),
	MobileEventListingPage_music_note_7: tryRequire('./MobileEventListingPage_music_note_7.png') || require('./questionMark.png'),
}
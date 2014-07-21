Tvseries = new Meteor.Collection("tvseries", {
	schema: {
		seriesTitle: {
			type: String,
			label: "Title",
			max: 250
		},
		network: {
			type: String,
			label: "Network",
			max: 200
		},
		airStartDate: {
			type: Date,
			label: "First episode air date" 
		},
		airEndDate: {
			type: Date,
			label: "Last episode air date"
		},
		numberOfSeasons: {
			type: Number,
			label: "Total number of seasons"
		},
		numberOfEpisodes: {
			type: Number,
			label: "Total number of episoides"
		},
		showCreators: {
			type: [String],
			label: "Original show runner"
		},
		starring: {
			type: [String],
			label: "Most famous cast memebers"
		},
	}
});

Episodes = new Meteor.Collection("episodes", {
	schema: {
		seriesId: {
			type: String,
			label: "Series ID FK"
		},
		seasonNumber: {
			type: Number
		},
		episodeNumber: {
			type: Number
		},
		title: {
			type: String,
			max: 300
		},
		runTime: {
			type: Number
		},
		director: {
			type: String
		},
		writers: {
			type: [String]
		},
		imdbRating: {
			type: String
		},
		scenes: {
			type: [Object]
		},
		characters: {
			type: [Object]
		},
		"scenes.$.sceneNumber": {
          type: Number
        },
		"scenes.$.sceneDesc": {
          type: String
        },
		"scenes.$.sceneImgUrl": {
          type: String
        },
		"characters.$.characterName": {
          type: String
        },
		"characters.$.characterDesc": {
          type: String
        },
        "characters.$.characterImgUrl": {
          type: String
        }
	}
});

Notesforshow = new Meteor.Collection("notesforshow", {
	schema: {
		episodeId: {
			type: String
			//fk to Episodes
		},
		createdBy: {
			type: String
			//fk to users
		},
		assocaitedSceneNumber: {
			type: Number,
			optional: true
		},
		associatedCharacterName: {
			type: String,
			optional: true
		},
		timestamp: {
			type: String
		},
		noteType: {
			type: String,
			optional: true
		},
		noteURL: {
			type: String
		},
		noteTitle: {
			type: String
		},
		noteDescription: {
			type: String
		},
		noteImg: {
			type: String
		},
		attachedToUserIds: {
			type: [String],
			optional: true
		},
		comments: {
			type: [Object],
			optional: true
		},
        "comments.$.userId": {
          type: String
        },
        "comments.$.commentText": {
          type: String
        },
        "comments.$.timestamp": {
          type: String
        }
	}
});

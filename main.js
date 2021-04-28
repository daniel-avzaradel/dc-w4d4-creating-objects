class Video {
    constructor(title, uploader, time) {
        this.title = title,
        this.uploader = uploader,
        this.time = time
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`)
    }
}

const teamsBR = [{title: 'São Paulo FC', uploader: 'Daniel', time: '45s'},
                 {title: 'Palmeiras', uploader: 'David', time: '35s'},
                 {title: 'Flamengo', uploader: 'Gabriel', time: '40s'},
                 {title: 'Fluminense', uploader: 'Diego', time: '30s'},
                 {title: 'Corinthians', uploader: 'Marcelo', time: '40s'}]



let spfc = new Video(teamsBR[0].title, teamsBR[0].uploader, teamsBR[0].time);
spfc.watch()

let palmeiras = new Video(teamsBR[1].title, teamsBR[1].uploader, teamsBR[1].time);
let flamengo = new Video(teamsBR[2].title, teamsBR[2].uploader, teamsBR[2].time);
let fluminense = new Video(teamsBR[3].title, teamsBR[3].uploader, teamsBR[3].time);
let corinthians = new Video(teamsBR[4].title, teamsBR[4].uploader, teamsBR[4].time);


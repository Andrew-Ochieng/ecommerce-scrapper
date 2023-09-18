const request = require('request')
const cheerio = require('cheerio')

request('https://womeninminingkenya.africa/blogs', (error, res, html) => {
    if (!error && res.statusCode == 200) {
        const $ = cheerio.load(html)

        const siteContent = $('.site-content')
        const blogContents = $('.uagb-block-d3141a3b')
        const blogHeading = $('.uagb-heading-text')
        const blogList = $('.uagb-block-d3141a3b')

        // console.log(siteContent.html())
        // console.log(blogContents.text())
        console.log(blogHeading.text())
        console.log(blogList.text())

        
    }
})







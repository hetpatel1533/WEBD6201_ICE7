console.log('pixabay.js loaded');



const makePosts = () => 
{
    for(let j=0; j<20; j++)
    {
        let id_no = j;

        let card = $(`<div class = "card blog"></div>`)
        .attr("id",'card-' + id_no)
        .appendTo($('.blog-column'));

        let body = $('<div class="card-body blog"></div>')
        .attr("id",'card-body-' + id_no)
        .appendTo(card);

        let title = $('<h5 class="card-title blog"></h5>')
        .attr("id",'card-title-' + id_no)
        .appendTo(body);

        let pic = $("<img>")
        .attr('id', "img-" + id_no)
        .addClass('blog-pic')
        .css('max-height', '100px')
        .appendTo(body);

        let text = $('<p class="card-text blog"></p>')
        .attr('id', 'card-text-' + id_no)
        .appendTo(body);

        let sub = $('<p class="userId blog"></p>')
        .attr('id', 'sub-' + id_no)
        .appendTo(body);

        let post_id = $('<span></span>')
        .attr('id', 'post-' + id_no)
        .text('Post #: ', id_no)
        .appendTo(sub);

        let user_id = $('<span></span>')
        .attr('id', 'user-' + id_no)
        .appendTo(sub);

    }
    getPictures();
};

const getPictures = () => 
{
    PIXABAY_KEY = '34296445-236b2337f772ca5672b6a20da';

    PIXABAY_URL = 'https://pixabay.com/api/?key=<KEY>&q=dramatic&landscapes&image_type=photo&per_page=30';
    const url = PIXABAY_URL.replace('<KEY>', PIXABAY_KEY);
    console.log(`URL: ${url}`)

    // pics = []
    fetch(url)
    .then((res) => 
    {
        return res.json();
    })
    .then((data) => 
    {
        console.log(data);
        for(let i=0; i<20; i++)
        {
            let picSrc = data['hits'][i]['webformatURL'];
            let altText = data['hits'][i]['tags'];
            console.log(`URL: ${picSrc} ALT: ${altText}`);
            $("#img-" + i).attr("src", picSrc).attr("alt", altText);
        }
    })
    .catch((err) => console.log(err));
};

makePosts();



//Write Code for Task One below this line!
//1. Create two arrays with two image links to TV show recommendations for each type: comedy, action, drama. Use doc in task one.
	let comedy = ["https://images.squarespace-cdn.com/content/v1/581bd18003596e16cc905cad/1597694713513-QB43HMYID7RSSUJEHW0L/The+Wrong+Missy+-+Netflix.jpg", "https://elcomercio.pe/resizer/ZWHJ9KjNqt_ga97jqdsMK1Twj-Y=/560x315/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/AJ5OUVYT35BTTL3Z75N66QXUMY.jpg","https://i.ytimg.com/vi/FHoD6YaRxzc/maxresdefault.jpg"];
	 let action =["https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/646987-jasin-boland-c-2012-warner-bros-entertainment-inc-54e2f8c553776eafbfd8ede11121a700.jpg", "https://m.media-amazon.com/images/M/MV5BZWFhNmI3OWQtOTU5Zi00ODA3LWExNjctMTllZWE2ZGE3ZTA1XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_.jpg","https://www.saanichnews.com/wp-content/uploads/2018/07/12720668_web1_SKYSCRAPER_Movie_01.jpg"];
	 let drama =["https://i.pinimg.com/originals/39/25/c0/3925c0ea3a23654c9fb977e931649d82.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/192716-crash.jpg?itok=62p-uX6s","https://static.americadigital.com/wp-content/uploads/2020/04/ad-entretenimiento-cine-peliculas-romanticas-drama-netflix-1.jpg"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
//Write code for Task Two below this line!
//2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.
    if(genreInput==="comedy"){
     for(let show of comedy){
    $(".shows").append("<img src="+show+">");
    }
	}
    else if(genreInput==="action"){
    for (let show of action ){
 $(".shows").append("<img src="+ show+">");
    }
    }
    else if(genreInput==="drama"){
    for (let show of drama){
    $(".shows").append("<img src="+ show+">");
    }
    }
});

$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
//Write code for Task Three below this line!
//3. Write a code using .push to allow the user to make TV show suggestions.
	comedy.push(suggestion);
     console.log(comedy);
    action.push(suggestion);
    console.log(action);
    drama.push(suggestion);
    console.log(drama);

    
});
/** 
 Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. 
 If multiple words tie for the same length, retrieve the word that occurs first.

Examples
getHashTags("How the Avocado Became the Fruit of the Global Trade")
--> ["#avocado", "#became", "#global"]

getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
--> ["#christmas", "#probably", "#will"]

getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
--> ["#surprise", "#parents", "#fruit"]

getHashTags("Visualizing Science")
--> ["#visualizing", "#science"]
**/

function getHashTags(input){

    const words = input.split(" ");

    for(let i=0;i<words.length-1;i++){

        for(let j = i+1; j<words.length;j++){

            if(words[i].length<words[j].length){

                let temp=words[i];

                words[i]=words[j];

                words[j]=temp;

            }
        
        }

    }

    for(let i=0;i<3;i++){

        if(words[i] != undefined){

            console.log("#"+words[i]);

        }

    }

}


getHashTags("How the Avocado Became the Fruit of the Global Trade");

console.log();

getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year");

console.log();

getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit");

console.log();

getHashTags("Visualizing Science");

import { headers } from "next/headers";
import { NextResponse } from "next/server";

const jokes = [
    {
        "setup": "Why don't scientists trust atoms?",
        "punchline": "Because they make up everything."
      },
      {
        "setup": "Why did the tomato turn red?",
        "punchline": "Because it saw the salad dressing."
      },
      {
        "setup": "How does a penguin build its house?",
        "punchline": "Igloos it together."
      },
      {
        "setup": "Why was the computer cold?",
        "punchline": "It left its Windows open."
      },
      {
        "setup": "Why did the man put his money in the freezer?",
        "punchline": "He wanted cold hard cash."
      },
      {
        "setup": "Why do seagulls fly over the sea?",
        "punchline": "Because if they flew over the bay, they'd be bagels."
      },
      {
        "setup": "What did the grape say when it got stepped on?",
        "punchline": "Nothing, it just let out a little wine."
      },
      {
        "setup": "Why don't skeletons fight each other?",
        "punchline": "They don't have the guts."
      },
      {
        "setup": "What's the best way to watch a fly fishing tournament?",
        "punchline": "Live stream."
      },
      {
        "setup": "Why did the hipster burn his tongue?",
        "punchline": "He drank his coffee before it was cool."
      },
      {
        "setup": "What do you call a fake noodle?",
        "punchline": "An impasta."
      },
      {
        "setup": "Why was the math book sad?",
        "punchline": "Because it had too many problems."
      },
      {
        "setup": "Why did the frog call his insurance company?",
        "punchline": "He had a jump in his car."
      },
      {
        "setup": "Why did the man run around his bed?",
        "punchline": "To catch up on his sleep."
      },
      {
        "setup": "What do you call a bee that can't make up its mind?",
        "punchline": "A maybee."
      },
      {
        "setup": "Why don't scientists trust atoms?",
        "punchline": "Because they make up everything."
      },
      {
        "setup": "What do you call a fish wearing a bowtie?",
        "punchline": "Sofishticated."
      },
      {
        "setup": "Why was the belt sent to jail?",
        "punchline": "For holding up the pants."
      },
      {
        "setup": "Why did the tomato turn red?",
        "punchline": "Because it saw the salad dressing."
      },
      {
        "setup": "What do you call an alligator in a vest?",
        "punchline": "An investigator."
      },
      {
        "setup": "What do you get when you cross a snowman and a vampire?",
        "punchline": "Frostbite."
      },
      {
        "setup": "Why don't sharks live on land?",
        "punchline": "Because they can't climb trees."
      },
      {
        "setup": "Why did the chicken cross the playground?",
        "punchline": "To get to the other slide."
      },
      {
        "setup": "Why don't scientists trust atoms?",
        "punchline": "Because they make up everything."
      },
      {
        "setup": "What's the difference between a poorly dressed man on a trampoline and a well-dressed man on a trampoline?",
        "punchline": "Attire."
      },
      {
        "setup": "Why was the math book sad?",
        "punchline": "Because it had too many problems."
      },
      {
        "setup": "Why did the tomato turn red?",
        "punchline": "Because it saw the salad dressing."
      },
      {
        "setup": "Why was the belt sent to jail?",
        "punchline": "For holding up the pants."
      },
      {
        "setup": "Why did the scarecrow win an award?",
        "punchline": "Because he was outstanding in his field."
      },
      {
        "setup": "Why don't oysters give to charity?",
        "punchline": "They're shellfish."
      },
      {
        "setup": "Why was the computer cold?",
        "punchline": "It left its Windows open."
      },
      {
        "setup": "What do you call a fake noodle?",
        "punchline": "An impasta."
      },
      {
        "setup": "Why don't scientists trust atoms?",
        "punchline": "Because they make up everything."
      },
      {
        "setup": "What do you call a bee that can't make up its mind?",
        "punchline": "A maybee."
      },
      {
        "setup": "Why did the man run around his bed?",
        "punchline": "To catch up on his sleep."
      },
      {
        "setup": "Why did the frog call his insurance company?",
        "punchline": "He had a jump in his car."
      },
      {
        "setup": "What did the grape say when it got stepped on?",
        "punchline": "Nothing, it just let out a little wine."
      },
      {
        "setup": "What do you call a bear with no teeth?",
        "punchline": "A gummy bear."
      },
      {
        "setup": "Why did the bicycle fall over?",
        "punchline": "Because it was two-tired."
      },
      {
        "setup": "Why don't sharks live on land?",
        "punchline": "Because they can't climb trees."
      },
      {
        "setup": "What did the left eye say to the right eye?",
        "punchline": "Between us, something smells."
      },
      {
        "setup": "Why do seagulls fly over the sea?",
        "punchline": "Because if they flew over the bay, they'd be bagels."
      },
      {
        "setup": "What do you call an alligator in a vest?",
        "punchline": "An investigator."
      },
      {
        "setup": "Why was the broom late?",
        "punchline": "It swept in."
      },
      {
        "setup": "Why don't skeletons fight each other?",
        "punchline": "They don't have the guts."
      },
      {
        "setup": "Why did the hipster burn his tongue?",
        "punchline": "He drank his coffee before it was cool."
      },
      {
        "setup": "Why do programmers prefer dark mode?",
        "punchline": "Because light attracts bugs."
      },
      {
        "setup": "Why did the programmer quit his job?",
        "punchline": "He didn't get arrays."
      },
      {
        "setup": "Why do programmers always mix up Christmas and Halloween?",
        "punchline": "Because Oct 31 equals Dec 25."
      },
      {
        "setup": "Why do Java developers wear glasses?",
        "punchline": "Because they can't C#."
      },
      {
        "setup": "Why do programmers prefer cooking with GitHub?",
        "punchline": "Because they always know what's in the master branch."
      },
      {
        "setup": "Why don't programmers like nature?",
        "punchline": "It has too many bugs."
      },
      {
        "setup": "Why don't programmers like nature photography?",
        "punchline": "They prefer pics that are more pixel-perfect."
      },
      {
        "setup": "Why do programmers always mix up Halloween and Christmas?",
        "punchline": "Because Oct 31 equals Dec 25."
      },
      {
        "setup": "Why did the programmer quit his job?",
        "punchline": "He didn't get arrays."
      },
      {
        "setup": "Why did the JavaScript developer wear glasses?",
        "punchline": "Because he couldn't C#."
      },
      {
        "setup": "Why do programmers prefer dark mode?",
        "punchline": "Because light attracts bugs."
      },
      {
        "setup": "Why do programmers prefer Linux?",
        "punchline": "Because it has better kernel support."
      },
      {
        "setup": "Why do programmers prefer dark chocolate?",
        "punchline": "Because it has a higher byte count."
      },
      {
        "setup": "Why do programmers prefer BBQs?",
        "punchline": "Because there's always a fork() for everyone."
      },
      {
        "setup": "Why do programmers prefer dogs to cats?",
        "punchline": "Because they always return a valid pointer."
      },
      {
        "setup": "Why don't programmers like nature?",
        "punchline": "It has too many bugs."
      },
      {
        "setup": "Why do programmers always mix up Christmas and Halloween?",
        "punchline": "Because Oct 31 equals Dec 25."
      },
      {
        "setup": "Why do programmers prefer to work alone?",
        "punchline": "Because they prefer singular over plurals."
      },
      {
        "setup": "Why do programmers prefer dark mode?",
        "punchline": "Because light attracts bugs."
      },
      {
        "setup": "Why did the programmer quit his job?",
        "punchline": "He didn't get arrays."
      },
      {
        "setup": "Why do programmers always mix up Christmas and Halloween?",
        "punchline": "Because Oct 31 equals Dec 25."
      },
      {
        "setup": "Why did the database administrator leave his wife?",
        "punchline": "She had one-to-many relationships."
      },
      {
        "setup": "Why do Java developers wear glasses?",
        "punchline": "Because they can't C#."
      },
      {
        "setup": "Why did the big brother always say he was cold?",
        "punchline": "Because he was a big bro-chill."
      },
      {
        "setup": "Why did the sister always have an answer for everything?",
        "punchline": "Because she was a know-it-sis."
      },
      {
        "setup": "Why did the younger sibling always win at hide and seek?",
        "punchline": "Because they were the little hide and seekster."
      },
      {
        "setup": "Why did the older sibling always win at board games?",
        "punchline": "Because they were the board game-ster."
      },
      {
        "setup": "Why did the sibling always wear sunglasses?",
        "punchline": "Because they were a shade-ster."
      },
      {
        "setup": "Why did the sister always get mad when the brother played the guitar?",
        "punchline": "Because she was a sore-loser."
      },
      {
        "setup": "Why did the younger sibling always try to copy the older sibling?",
        "punchline": "Because they were a copycat-ster."
      },
      {
        "setup": "Why did the older sibling always want to drive the car?",
        "punchline": "Because they were a road-ster."
      },
      {
        "setup": "Why did the younger sibling always ask for help with their homework?",
        "punchline": "Because they were a study-buddy-ster."
      },
      {
        "setup": "Why did the older sibling always get to choose the TV show?",
        "punchline": "Because they were a remote-ster."
      },
      {
        "setup": "Why did the sibling always make the best cookies?",
        "punchline": "Because they were a cookie-monster."
      },
      {
        "setup": "Why did the sibling always get in trouble for leaving their clothes on the floor?",
        "punchline": "Because they were a messy-bester."
      },
      {
        "setup": "Why did the younger sibling always want to play with the older sibling's toys?",
        "punchline": "Because they were a toy-ster."
      },
      {
        "setup": "Why did the older sibling always have to babysit?",
        "punchline": "Because they were a baby-sitter."
      },
      {
        "setup": "Why did the sibling always love to go swimming?",
        "punchline": "Because they were a water-ster."
      },
      {
        "setup": "Why did the younger sibling always want to be carried?",
        "punchline": "Because they were a carry-ster."
      },
      {
        "setup": "Why did the older sibling always know the way?",
        "punchline": "Because they were a map-ster."
      },
      {
        "setup": "Why did the sibling always get their way?",
        "punchline": "Because they were a persuader-ster."
      },
      {
        "setup": "Why did the younger sibling always get away with things?",
        "punchline": "Because they were the baby of the family."
      },
      {
        "setup": "Why did the older sibling always get to pick the game?",
        "punchline": "Because they were a game-ster."
      },
      {
        "setup": "Why do mathematicians hate the U.S. Postal Service?",
        "punchline": "Because it takes them forever to work out their expressions."
      },
      {
        "setup": "Why was the math book sad?",
        "punchline": "Because it had too many problems."
      },
      {
        "setup": "Why did the math teacher break up with the geometry teacher?",
        "punchline": "Because they had too many tangents."
      },
      {
        "setup": "Why did the math teacher love geometry?",
        "punchline": "Because it's plane fun!"
      },
      {
        "setup": "Why do math teachers love parks?",
        "punchline": "Because of all the natural logs."
      },
      {
        "setup": "Why did the math teacher go to the beach?",
        "punchline": "To test their tangents."
      },
      {
        "setup": "Why do math teachers never trust atoms?",
        "punchline": "Because they make up everything."
      },
      {
        "setup": "Why did the math teacher get mad at the calculator?",
        "punchline": "Because it always had a lot of problems."
      },
      {
        "setup": "Why did the math teacher take a ruler to bed?",
        "punchline": "To see how long they slept."
      },
      {
        "setup": "Why did the math teacher go to the bank?",
        "punchline": "To get their decimal point."
      },
      {
        "setup": "Why did the math teacher love algebra?",
        "punchline": "Because they were always looking for the X factor."
      },
      {
        "setup": "Why did the math teacher never give up on calculus?",
        "punchline": "Because they knew it was integral to their success."
      },
      {
        "setup": "Why did the math teacher love geometry?",
        "punchline": "Because it was point-ful."
      },
      {
        "setup": "Why do math teachers love fruit?",
        "punchline": "Because it's pi-rific."
      },
      {
        "setup": "Why did the math teacher go to the beach?",
        "punchline": "To do some sine and cosine."
      },
      {
        "setup": "Why did the math teacher love fractions?",
        "punchline": "Because they're always looking for a common denominator."
      },
      {
        "setup": "Why did the math teacher love geometry?",
        "punchline": "Because it's just plane awesome."
      },
      {
        "setup": "Why did the math teacher go to the bank?",
        "punchline": "To check their balance."
      },
      {
        "setup": "Why do math teachers love baseball?",
        "punchline": "Because of all the natural curves."
      },
      {
        "setup": "Why do math teachers love logic puzzles?",
        "punchline": "Because they add up to fun."
      },
      {
        "setup": "Why did the math teacher never give up on algebra?",
        "punchline": "Because they knew it was always solvable."
      },
      {
        "setup": "Why did the math teacher love geometry?",
        "punchline": "Because it's angle-licious."
      },
      {
        "setup": "Why did the math teacher go to the dentist?",
        "punchline": "To get their exponential."
      },
      {
        "setup": "Why did the physics professor break up with the biology professor?",
        "punchline": "There was no chemistry."
      },
      {
        "setup": "Why did the chemist break up with the physicist?",
        "punchline": "There was no reaction."
      },
      {
        "setup": "Why did the scientist install a knocker on their door?",
        "punchline": "To win the No-bell prize."
      },
      {
        "setup": "Why don't scientists trust atoms?",
        "punchline": "Because they make up everything."
      },
      {
        "setup": "Why did the scientist cross the road?",
        "punchline": "To get to the other side of the experiment."
      },
      {
        "setup": "Why did the physicist break up with the geologist?",
        "punchline": "They had different rocks."
      },
      {
        "setup": "Why did the microbiologist break up with the immunologist?",
        "punchline": "They had no chemistry."
      },
      {
        "setup": "Why did the chemist break up with their significant other?",
        "punchline": "They just didn't bond well."
      },
      {
        "setup": "Why did the mathematician break up with the biologist?",
        "punchline": "They couldn't solve their problems."
      },
      {
        "setup": "Why did the biologist break up with their significant other?",
        "punchline": "They were in different species."
      },
      {
        "setup": "Why did the scientist go to art school?",
        "punchline": "To learn how to draw conclusions."
      },
      {
        "setup": "Why do scientists prefer cold weather?",
        "punchline": "Because Celsius and Kelvin are cool."
      },
      {
        "setup": "Why did the physicist go to the beach?",
        "punchline": "To study the motion of the ocean."
      },
      {
        "setup": "Why did the biologist take two pairs of pants to their lab?",
        "punchline": "In case they got a gene in them."
      },
      {
        "setup": "Why do chemists like nitrates so much?",
        "punchline": "Because they're cheaper than day rates."
      },
      {
        "setup": "Why did the physicist throw their watch out the window?",
        "punchline": "To see time fly."
      },
      {
        "setup": "Why did the biologist break up with their significant other?",
        "punchline": "They had no future."
      },
      {
        "setup": "Why don't scientists trust atoms?",
        "punchline": "Because they make up everything."
      },
      {
        "setup": "Why did the mathematician go to the beach?",
        "punchline": "To work on their tan-gents."
      },
      {
        "setup": "Why did the physicist go to the bank?",
        "punchline": "To invest in sub-atomic bonds."
      },
      {
        "setup": "Why did the chemist throw a party?",
        "punchline": "They wanted to see some chemical reactions."
      },
      {
        "setup": "Why did the biologist break up with their significant other?",
        "punchline": "They were just a DNA mismatch."
      },
         {
        "setup": "Why did the accountant break up with the mathematician?",
        "punchline": "They had too many figures."
      },
      {
        "setup": "Why did the economist go to the bank?",
        "punchline": "To study their capital."
      },
      {
        "setup": "Why did the auditor become a comedian?",
        "punchline": "To balance out their books."
      },
      {
        "setup": "Why did the entrepreneur cross the road?",
        "punchline": "To get to the other side of the market."
      },
      {
        "setup": "Why did the business owner take a vacation?",
        "punchline": "To re-tail."
      },
      {
        "setup": "Why did the banker break up with their significant other?",
        "punchline": "They were in different interest rates."
      },
      {
        "setup": "Why did the accountant get a tattoo of a balance sheet?",
        "punchline": "To keep their assets in order."
      },
      {
        "setup": "Why did the stockbroker go to the zoo?",
        "punchline": "To see their bear market."
      },
      {
        "setup": "Why did the salesperson go to the casino?",
        "punchline": "To work on their commission."
      },
      {
        "setup": "Why did the economist become a writer?",
        "punchline": "To become a best seller."
      },
      {
        "setup": "Why did the banker go to the gym?",
        "punchline": "To work on their interest rate."
      },
      {
        "setup": "Why did the entrepreneur get a tattoo of a dollar sign?",
        "punchline": "To show their passion for profits."
      },
      {
        "setup": "Why did the accountant become a yoga instructor?",
        "punchline": "To balance their books."
      },
      {
        "setup": "Why did the business owner become a magician?",
        "punchline": "To turn their losses into profit."
      },
      {
        "setup": "Why did the salesperson go to the party?",
        "punchline": "To network."
      },
      {
        "setup": "Why did the economist become a politician?",
        "punchline": "To influence the market."
      },
      {
        "setup": "Why did the banker go to the dentist?",
        "punchline": "To invest in their smile."
      },
      {
        "setup": "Why did the accountant go to the gym?",
        "punchline": "To work on their balance sheet."
      },
      {
        "setup": "Why did the business owner go to the park?",
        "punchline": "To study their cash flow."
      },
      {
        "setup": "Why did the economist go to the library?",
        "punchline": "To research their next market move."
      },
      {
        "setup": "Why did the entrepreneur get a tattoo of a chart?",
        "punchline": "To show their growth potential."
      },
      {
        "setup": "Why did the salesperson go to the beach?",
        "punchline": "To work on their sales pitch."
      },
      {
        "setup": "Why did the accountant become a chef?",
        "punchline": "To cook the books."
      }
    ]
    


export async function GET() {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    
    return NextResponse.json({ joke }, { headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
    }});
}
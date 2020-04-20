import React from 'react';
import './About.scss';

export default function About(props) {
  return (
    <section className="about">
      <h1 className="about-title">Side Quests</h1>
      <div className="about-articles">
        <article className="left-article">
          <h2>About<img alt="questionmark" className="aboutImgs" src="/images/about/aboutIcon.png"></img></h2>
          <p className="prgph">
            Side-Quests is an app where we connect volunteers with people in need.
            People needing help play the role of the villager and volunteers register
            as an adventurer.
            Each Adventurer has a total of 7 classes under their belt, each specializing in a
            specific type of volunteering. When a villager creates a quest, they will specify
            what kind of hero (class) that they require for the job.
            Complete these quests to level up your individual classes and be rewarded with bagdes
            to commend you on making the world a better place.
            Happy Questing!
          </p>
        </article>
        <article className="right-article">
          <h2><img className="aboutImgs" alt="ladder" src="/images/about/getStartedIcon.png"></img>Get started</h2>
          <p className="prgph-right">
            To get started, simply go to the <strong>'register'</strong> page, and pick which account type you'd like to have. If you choose Adventurer, it means that you want to take on quests and help people. If you choose villager, it means that you want to give out quests and requrie assistance. Don't worry, you can always change your account type later on.
          </p>
        </article>
        <article className="left-article">
          <h2>Villagers<img className="aboutImgs" alt="handshake" src="/images/about/villagerIcon.png"></img></h2>
          <p className="prgph">
            <u>Creating a quest:</u> <br />
            To create a quest, go to the menu in the nav-bar, choose the <strong>'Create Quest'</strong> option, and fill in the form. Make sure that you fill in all the details. Once the quest is created, adventurers will be able to see your quest and take it on if they want to.<br /><br />
            <u>Completing a quest:</u><br />
            Once the adventurer has completed the requirements of your quest, make sure you mark it as complete by clicking the <strong>'Complete'</strong> button on your <strong>'Quest'</strong> tab.<br /><br />
            <u>Canceling a quest:</u><br />
            You may cancel a quest by clicking the <strong>'Cancel'</strong> button on the quest that you wish to delete in the <strong>'Quest'</strong> tab. Careful, however, this will delete the quest permanently.<br /><br />
            <u>Communication:</u> <br />
            Make sure you communicate with the adventurer taking on your quest so that they can help you as best as they can. You can send them an email to give more details by clicking the email link, or click the <strong>'Hangouts'</strong> button to go to a google hangouts where you can speak with the adventurer directly.<br /><br />
          </p>
        </article>
        <article className="right-article">
          <h2><img className="aboutImgs" alt="swordshield" src="/images/about/AdventurerIcon.png"></img>Adventurer</h2>
          <p className="prgph-right">
            <u>View the quest listing:</u><br />
            To see all the quests available for completion, just go to the navbar's <strong>'Quests'</strong> tab. From there, you can pick a class, which will display the quests that are available for that particular class. You can also view the description for each class, which will tell you more about what is expected of you depending on the class that is chosen.<br /><br />
            <u>Accepting a quest:</u><br />
            Once you find a quest that you feel like you can take on, press the <strong>'Accept Quest'</strong> button. This will reveal some information for communicating with the villager who posted the quest.<br /><br />
            <u>Completing a quest</u><br />
            Once you fullfilled the requirement for the quest, the villager will need to mark the quest as complete in order for you to get experience points.<br /><br />
            <u>Dropping a quest</u><br />
            You can always drop a quest if you feel like you can no longer fullfill its requirements. Simply go to your <strong>'Accepted Quests'</strong> tab in the navbar and click the <strong>'Drop Quest'</strong> button on the appropriate quest.<br /><br />
            <u>Communication:</u> <br />
            Make sure you communicate with the villager who posted the quest so that they know you're taking care of things. You can send them an email to give more details by clicking the email link, or click the <strong>'Hangouts'</strong> button to go to a google hangouts where you can speak with the villager directly.<br /><br />
            <u>Leveling:</u><br />
            Once your villager has marked the quest as completed, you will recieve some experience. Each quest completed gives you 100exp. Everytime you level up, your experience points go back to 0. You can find an overview of the progress for each of your classes on the <strong>'Progress'</strong> tab in the navbar. <br /><u>Note:</u> below you will find a table explaining the required experience points for each level.<br /><br />
            <u>Badges:</u><br />
            Badges are class specific rewards that you can aquire by completing certain requirements. To view all the available badges, pick a class in the <strong>'Quests'</strong> tab. You can view the requirement by hovering over the badges. Once you obtain a badge, it will no longer be greyed out on the <strong>'Quests'</strong> tab, and it will appear on your <strong>'Profile'</strong> page.<br /><br />

            <u>Leveling table:</u><br />
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">level</th>
                  <th scope="col">Required Experience</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td>...</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td>n</td>
                  <td>n * 100</td>
                </tr>
              </tbody>
            </table>
          </p>
        </article>
      </div>
    </section>
  )
}
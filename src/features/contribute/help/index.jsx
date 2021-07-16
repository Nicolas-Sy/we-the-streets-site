import P from 'ui/heading/p';
import HelpItem from './helpItem';

export default function HelpDirectory() {
  return (
    <section className="shadow container mx-auto my-12">
      <HelpItem heading="Starting a new Annotation Session">
        <div className="flex flex-col ">
          <div className="gifContainer border-black border-4 self-center">
            <img src="/images/help/how_to_annotate.gif"></img>
          </div>
          <div className="mt-4 text-lg ml-0 lg:ml-16 xl:ml-32 2xl:ml-64">
            <P> 1. Open your dashboard.</P>
            <P> 2. Click on "Start Annotating". </P>
            <P> 3. Select the number of annotations you are willing to do for the session. </P>
          </div>
        </div>
      </HelpItem>
      <HelpItem heading="Classifying Obstructions">
        <div className="flex flex-col ">
          <div className="gifContainer border-black border-4 self-center">
            <img src="/images/help/classify_obstruction.gif"></img>
          </div>
          <div className="mt-4 text-lg ml-0 lg:ml-16 xl:ml-32 2xl:ml-64">
            <P className="mb-2"> We classify "<u>obstructions</u>" as objects that <b>block the pathway</b> for a pedestrian to easily walk along the sidewalk. </P>
            <P> 1. Click on the white boxes that you think are blocking the sidewalk.  </P>
            <P> 2. If the object blocks the pathway of the sidewalk, select "Yes" as your option, otherwise select "No". </P>
            <P> 3. The object will appear on the "Selected Obstructions" list if you selected "Yes". </P>
          </div>
        </div>
      </HelpItem>
      <HelpItem heading="Labeling New Obstructions">
        <div className="flex flex-col ">
          <div className="gifContainer border-black border-4 self-center">
            <img src="/images/help/label_obstruction.gif"></img>
          </div>
          <div className="mt-4 text-lg ml-0 lg:ml-16 xl:ml-32 2xl:ml-64">
            <P className="mb-2">If you see an obstruction on the image that <b>does not have a bounding box around it yet</b>, it's time to label it as an <u>obstruction</u>!</P>
            <P> 1. Draw a box around the obstruction by clicking and dragging your mouse from the top left to the bottom right. </P>
            <P> 2. Select the type of object among the selection list. </P>
            <P> 3. Click the "check mark" icon to confirm your action, otherwise click the "trash bin" icon to delete your action. </P>
            <P className="mb-2"> 4. The new obstruction will appear on the "New Obstructions" list.</P>
            <P> <b> Note: </b>We have limited objects among the options, as these are the objects that can be commonly found along
              Philippine sidewalks. If the object that you are about to label is not on the list, please do not label it anymore. </P>
          </div>
        </div>
      </HelpItem>
      <HelpItem heading="Rating Sidewalk Accessibility">
        <div className="flex flex-col ">
          <div className="gifContainer border-black border-4 self-center">
            <img src="/images/help/Rating Accessibility.gif"></img>
          </div>
          <div className="mt-4 text-lg ml-0 lg:ml-16 xl:ml-32 2xl:ml-64">
            <P> 1. Place your mouse over the slider and drag it towards the accessibility rating of the sidewalk found in the image.</P>
            <P> 2. An accessibility rating of 1 means that the sidewalk is completely <b> unsafe and inaccessible </b> for both abled pedestrians and PWPDs. </P>
            <P> 3. An accessibility rating of 10 means that the sidewalk is very <b> safe and accessible </b>for both abled pedestrians and PWPDs.</P>
          </div>
        </div>
      </HelpItem>
      <HelpItem heading="Determining Surface Type">
        <div className="flex flex-col ">
          <div className="gifContainer border-black border-4 self-center">
            <img src="/images/help/Sidewalk Type.gif"></img>
          </div>
          <div className="mt-4 text-lg ml-0 lg:ml-16 xl:ml-32 2xl:ml-64">
            <P> 1. Among the 3 choices, select the image that best describes the surface type of the sidewalk.  </P>
            <P> 2. If the image has no sidewalk, select the option of "No Sidewalk". </P>
          </div>
        </div>
      </HelpItem>
    </section>
  );
}

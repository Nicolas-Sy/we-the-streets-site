import P from 'ui/heading/p';
import HelpItem from './helpItem';

export default function HelpDirectory() {
  return (
    <section className="shadow container mx-auto my-12">
      <HelpItem heading="Starting a new Annotation Session">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/3 mr-2 bg-red-600">
            Gif
          </div>
          <div className="">
            <P> 1. Open your dashboard.</P>
            <P> 2. Click on "Start Annotating". </P>
            <P> 3. Select the number of annotations you are willing to do for the session. </P>
          </div>
        </div>
      </HelpItem>
      <HelpItem heading="Classifying Obstructions">
        <div>
          <P className="text-xl mb-2"> We classify "obstructions" as objects that <b>block the pathway</b> for a pedestrian to easily walk along the sidewalk. </P>
          <P> 1. Click on a bounding box on the image.  </P>
          <P> 2. If the object blocks the pathway of the sidewalk, select "Yes" as your option, otherwise select "No". </P>
          <P> 3. The object will appear on the "Selected Obstructions" list if you selected "Yes". </P>
        </div>
      </HelpItem>
      <HelpItem heading="Labeling New Obstructions">
        <div>
          <P className="text-xl mb-2">If you see an obstruction on the image that <b>does not have a bounding box around it yet</b>, it's time to label it as an obstruction!</P>
          <P> 1. Point your mouse on the obstruction.</P>
          <P> 2. Click and drag to draw a bounding box around it. </P>
          <P> 3. Click the box (we can make this automatic na). </P>
          <P> 4. Select the type of object among the selection list. </P>
          <P> 5. Click the "check mark" icon to confirm your action, otherwise click the "trash bin" icon to delete your action. </P>
          <P> 6. The new obstruction will appear on the "New Obstructions" list.</P>
          <P> <b> Note: </b>We have limited objects among the options, as these are the objects that can be commonly found along
            Philippine sidewalks. If the object that you are about to label is not on the list, please do not label it anymore. </P>
        </div>
      </HelpItem>
      <HelpItem heading="Rating Sidewalk Accessibility">
        <div>
          <P> 1. Place your mouse over the slider and drag it towards the accessibility rating of the sidewalk found in the image.</P>
          <P> 2. An accessibility rating of 1 means that the sidewalk is completely unsafe and inaccessible for both abled pedestrians and PWPDs. </P>
          <P> 3. An accessibility rating of 10 means that the sidewalk has no accessibility nor safety issues for both abled pedestrians and PWPDs.</P>
        </div>
      </HelpItem>
      <HelpItem heading="Determining Surface Type">
        <div>
          <P> 1. Among the 3 choices, select the image that best describes the surface type of the sidewalk.  </P>
          <P> 2. If the image has no sidewalk, select the option of "No Sidewalk". </P>
        </div>
      </HelpItem>
    </section>
  );
}

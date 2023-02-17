import Button from '../components/Button';
import {GoBell,GoCloudDownload,GoDatabase} from 'react-icons/go';

function ButtonPage() {
    const onclickhandle = () => {
        console.log("clicked on me")
    }
  return (
    <div>
      <div>
        <Button secondary outline rounded onClick={onclickhandle}>
            <GoBell/>
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
            <GoCloudDownload/>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
            <GoDatabase/>
            See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded  onClick={onclickhandle}>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default uttonPage;
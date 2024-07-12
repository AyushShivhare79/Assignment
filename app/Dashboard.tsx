import { Button } from "@/components/ui/button";
import { Admin } from "./components/Admin";
import Heading from "./components/Heading";
import Select from "./components/Select";
import { Textarea } from "@/components/ui/textarea";
import TextArea from "./components/TextArea";

const Dashboard = () => {
  return (
    <>
      <div className="flex px-14 pt-5 border">
        <div className=" w-3/5 border">
          <div className="flex flex-col gap-5">
            <Heading />
            <Admin label={"Admin/ ID"} />

            <div className="flex items-center gap-5">
              <Select label={"Products"} />
              <Admin label={"Quantity"} />
              <Button>Serial number</Button>
            </div>
            <div>Add new</div>

            <div className="flex items-center gap-5">
              <Select label={"Usage"} />
              <Admin label={"Reason"} />
            </div>

            <div className="pt-5">
              <TextArea label="Description" />
            </div>
          </div>
        </div>
        <div className=" w-2/5   border">
          <div>Serial number of </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

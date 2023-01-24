
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({setSelectedPage}: Props) => {
  return (<section
  id="benefits"
  className="mx-auto min-h-full w-5/6 py-20">
  <motion.div
  className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
>
    <div>
        <HText>MORE THAN JUST GYM.</HText>
        <p className="my-5 text-sm">

        </p>
    </div>
 </motion.div>

</section>
  );
};

export default Benefits;
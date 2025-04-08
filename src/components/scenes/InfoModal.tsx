import { useState } from "react";
import Modal from "../shared/Modal";
import { SceneInfo } from "@/types/Scene.types";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import Icon from "../shared/Icon";
import Image from "next/image";
import InfoLabel from "../shared/InfoLabel";

interface Props {
  sceneName: string;
  sceneInfo: SceneInfo[];
}

export default function InfoModal({ sceneName, sceneInfo }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <InfoLabel direction="bottom-right">
      <button onClick={() => setOpen(true)} className="cursor-pointer">
        <Icon name="Question" size={28} className="opacity-80" />
      </button>

      <Modal title={sceneName} open={open} setOpen={setOpen}>
        <div className="flex flex-col gap-2 text-lg">
          {sceneInfo.map((info, index) =>
            info.heading ? (
              <h3
                key={index}
                className={
                  "text-lg font-semibold " + (index === 0 ? "" : "mt-8")
                }
              >
                {info.heading}
              </h3>
            ) : info.text ? (
              <div className="text-base font-medium opacity-50" key={index}>
                <Latex>{`${info.text}`}</Latex>
              </div>
            ) : info.latex ? (
              <div key={index}>
                <Latex>{`$$${info.latex}$$`}</Latex>
              </div>
            ) : (
              <Image
                key={index}
                src={info.image?.src ?? ""}
                alt={info.image?.alt ?? ""}
                width={1000}
                height={0}
                className="w-full"
              />
            ),
          )}
        </div>
      </Modal>
    </InfoLabel>
  );
}

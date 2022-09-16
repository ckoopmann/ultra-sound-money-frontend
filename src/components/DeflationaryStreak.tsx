import * as DateFns from "date-fns";
import type { FC } from "react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import Skeleton from "react-loading-skeleton";
import { decodeGroupedAnalysis1, useGroupedAnalysis1 } from "../api/grouped-analysis-1";
import { AmountUnitSpace } from "./Spacing";
import SpanMoji from "./SpanMoji";
import { TextRoboto } from "./Texts";
import { WidgetBackground, WidgetTitle } from "./WidgetSubcomponents";

const DeflationaryStreak: FC = () => {
  const [timeElapsed, setTimeElapsed] = useState<string>();
  const groupedAnalysis1F = useGroupedAnalysis1();
  const groupedAnalysis1 = decodeGroupedAnalysis1(groupedAnalysis1F);

  const deflationaryStreak = groupedAnalysis1?.deflationaryStreak.postMerge;
  const latestBlocks = groupedAnalysis1?.latestBlockFees;

  useEffect(() => {
    if (deflationaryStreak == undefined || latestBlocks === undefined) {
      return;
    }

    const lastBlock = latestBlocks[0];

    setTimeElapsed(
      DateFns.formatDistanceStrict(
        DateFns.parseISO(lastBlock.minedAt),
        DateFns.parseISO(deflationaryStreak.startedOn),
      ),
    );
  }, [deflationaryStreak, latestBlocks]);

  return (
    <WidgetBackground>
      <div className="flex flex-col gap-y-2">
        <WidgetTitle>deflationary streak</WidgetTitle>
        <div
          className={`
            flex items-center
            text-2xl md:text-4xl lg:text-3xl xl:text-4xl
          `}
        >
          {deflationaryStreak != undefined ? (
            <>
              <TextRoboto>
                <CountUp
                  decimals={0}
                  duration={0.8}
                  end={deflationaryStreak.count}
                  preserveValue={true}
                  separator=","
                  suffix={deflationaryStreak.count === 1 ? " block" : " blocks"}
                />
                <AmountUnitSpace />
              </TextRoboto>
              <SpanMoji
                className="flex items-center gap-x-1 ml-4"
                imageClassName="h-8"
                emoji="🦇🔊"
              />
            </>
          ) : (
            <>
              <TextRoboto>0 blocks</TextRoboto>
            </>
          )}
        </div>
        <span className="font-inter text-blue-spindle text-xs md:text-sm font-extralight">
          {deflationaryStreak == null ? (
            "awaiting deflationary block"
          ) : (
            <>
              spanning
              <span className="text-white ml-1">
                {timeElapsed || <Skeleton inline={true} width="2rem" />}
              </span>
            </>
          )}
        </span>
      </div>
    </WidgetBackground>
  );
};

export default DeflationaryStreak;

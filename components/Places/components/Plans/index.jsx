import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { selectPlan } from "../../../../store/features/system";

import styles from "./style.module.scss";

const Plans = ({ plan }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { currentPlan } = useSelector((state) => state.systemSlice);

  return (
    <div
      className={`${styles["places-plans__item"]} ${
        currentPlan?.id === plan.id ? styles["places-plans__item-active"] : ""
      }`}
      onClick={() => dispatch(selectPlan(plan))}
    >
      <div className={styles["places-plans__image"]}>
        <Image
          src={plan.planImage}
          fill
          alt=""
          draggable={false}
          quality={100}
          className="object-scale-down w-full h-full"
        />
      </div>

      <ul className={styles["places-plans__list"]}>
        <li>
          <span>{t("Flool")}</span>
          <span>{plan.floor}</span>
        </li>
        <li>
          <span>
            {t("With a balcony")} м<sup>2</sup>:
          </span>
          <span>{plan.hasBalcony}</span>
        </li>
        <li>
          <span>
            {t("Without balcony")} м<sup>2</sup>:
          </span>
          <span>{plan.noBalcony}</span>
        </li>
        <li>
          <span>{t("Room")}</span>
          <span>{plan.rooms}</span>
        </li>
      </ul>
    </div>
  );
};

export default Plans;

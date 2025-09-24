import { IoInformationCircle } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { MdGroup, MdHomeRepairService } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

export const navbar = (t) => [
    {
        title: t('home'),
        icon: GoHomeFill,
    },
    {
        title: t("about"),
        icon: IoInformationCircle,
    },
    {
        title: t("service"),
        icon: MdHomeRepairService
    },
    {
        title: t("feature"),
        icon: FaStar,
    },
    {
        title: t("partners"),
        icon: MdGroup,
    },
]

export const services = t => [
    {
        title: t("service1Title"),
        img: "/images/Vector.svg",
        paragraph: t("service1Text"),
        lists: [
            {title: t("service1List1")},
            {title: t("service1List2")},
            {title: t("service1List3")},
            {title: t("service1List4")},
        ]
    },
    {
        title: t("service2Title"),
        img: "/images/Vector1.svg",
        paragraph: t("service2Text"),
        lists: [
            {title: t("service2List1")},
            {title: t("service2List2")},
            {title: t("service2List3")},
            {title: t("service2List4")},
        ]
    },
    {
        title: t("service3Title"),
        img: "/images/Vector2.svg",
        paragraph: t("service3Text"),
        lists: [
            {title: t("service3List1")},
            {title: t("service3List2")},
            {title: t("service3List3")},
            {title: t("service3List4")},
        ]
    },
    {
        title: t("service4Title"),
        img: "/images/Vector3.svg",
        paragraph: t("service4Text"),
        lists: [
            {title: t("service4List1")},
            {title: t("service4List2")},
            {title: t("service4List3")},
            {title: t("service4List4")},
        ]
    },
    {
        title: t("service5Title"),
        img: "/images/Vector4.svg",
        paragraph: t("service5Text"),
        lists: [
            {title: t("service5List1")},
            {title: t("service5List2")},
            {title: t("service5List3")},
            {title: t("service5List4")},
        ]
    },
]

export const feature = t => [
    {
        title: t("feature1Title"),
        text: t("feature1Text"),
        img: "/images/feature5.svg"
    },
    {
        title: t("feature2Title"),
        text: t("feature2Text"),
        img: "/images/feature6.svg"
    },
    {
        title: t("feature3Title"),
        text: t("feature3Text"),
        img: "/images/feature7.svg"
    },
    {
        title: t("feature4Title"),
        text: t("feature4Text"),
        img: "/images/feature8.svg"
    },
]
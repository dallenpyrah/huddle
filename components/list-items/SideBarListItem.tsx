import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideBarListItem(props: { title: string, icon?: IconProp }) {
    return (
        <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                {props.icon && <span className="mr-4 text-purple-300"><FontAwesomeIcon icon={props.icon} /></span>}
                <span className="">{props.title}</span>
            </a>
        </li>
    )
}
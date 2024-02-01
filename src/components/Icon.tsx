import { FontAwesome } from "@expo/vector-icons/";

export function Icon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={21} style={{ marginBottom: -3 }} {...props} />;
}
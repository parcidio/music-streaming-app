import { Ionicons } from "@expo/vector-icons/";

export function Icon(props: {
    name: React.ComponentProps<typeof Ionicons>['name'];
    color: string;
}) {
    return <Ionicons size={21} style={{ marginBottom: -3 }} {...props} />;
}
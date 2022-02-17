import del from "del";
export const cleaner = () => {
    return del(app.path.clean);
}
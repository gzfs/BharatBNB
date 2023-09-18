export function capitalizeString(inpString: string): string {
  return (
    inpString.charAt(0).toLocaleUpperCase() + inpString.substring(1)
  );
}

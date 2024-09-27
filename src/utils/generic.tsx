export const isValidPhoto = (photo: string) => {
    if (!photo) return false;
    if (photo.includes('.jpg') || photo.includes('.png') || photo.includes('.jpeg')) return true;
    return false;
  }

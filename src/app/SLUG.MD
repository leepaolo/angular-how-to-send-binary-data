------------ > SEND BINARY DATA < ------------

Use json-server https://www.npmjs.com/package/json-server

1 - Setup:

- Ensure you have json-server installed and set up for mocking your backend.
- Make sure your Angular project has the necessary modules installed (like HttpClientModule).

2 - Create the necessary type:
In a separate file (upload.type.ts), define the IDataImage interface:
typescript

export interface IDataImage {
id?: number;
data: string;
}

3 - Develop the Upload Component:

- In upload.component.ts:
- Import necessary dependencies.
- Define properties: selectedFile for the chosen file and images as an array of type IDataImage.
- Implement the onFileSelected method to handle the file input change event.
- Implement the uploadImage method:
- Use FileReader to read the image as a Data URL (base64).
- Once loaded, make a POST request to save this binary data.
- After the image is uploaded, fetch the list of images.
- Implement the fetchImages method to retrieve the list of images from the mock server.
- Implement the deleteImage method to remove an image based on its ID.

3 - HTML Template for Upload Component:

- In upload.component.html:
- Create an input field of type file to select the image.
- Add an upload button to initiate the upload process.
- Display each image from the images array using an \*ngFor loop.
- For each image, add a delete button to remove it.

4 - Connect to the Mock Backend:

- Use json-server to mock the backend:
- bash
- Copy code
- json-server --watch db.json
- Structure db.json to have an "images" key for storing the image data.

5 - Handle Image Data:

- When an image is uploaded, it's converted to a base64 string (binary data in a textual form).
- This data is stored in the mock server.
- When displaying, the base64 data is used as the source for the img tag.
- For deletion, the image is identified by its ID and removed.

6 - Error Handling and Enhancements (not covered in our discussion but recommended):

- Add error handling for HTTP requests.
- Include a loading indicator for better user experience.
- Consider breaking functionality into separate services (e.g., an ImageService) to make the component - leaner and promote reusability.

By following these steps, you'll have a functional image uploading system that stores images as binary data using a mock backend. When moving to a real backend, you'd adjust the HTTP requests to point to your actual server endpoints.

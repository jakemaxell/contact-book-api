import { addNewContact ,
        getContacts,
        getContactWithID,
        updateContact,
        deleteContact,
        getContactWithLastName
} from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        // Get all contacts
        .get(getContacts)

        // Post request to create a new contact
        .post(addNewContact);

    app.route('/contact/:contactID')
        // Get contact by ID
        .get(getContactWithID)

        // Put request to update a contact
        .put(updateContact)

        // Delete a contact by ID
        .delete(deleteContact)  

    app.route('/contact/searchByLastName/:contactLastName')
        // Get contact by last name
        .get(getContactWithLastName);
}

export default routes;
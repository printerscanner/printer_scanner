// functions/subscribe.js

exports.handler = async (event) => {
    try {
      const { email } = JSON.parse(event.body);
  
      // Replace these values with your Mailchimp API key and list ID
      const apiKey = "8fadc39fb42906c3fc7752c0ad91d9fd-us22";
      const listId = "y544939589d";
  
      const response = await fetch(
        `https://<dc>.api.mailchimp.com/3.0/lists/${listId}/members`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `apikey ${apiKey}`,
          },
          body: JSON.stringify({
            email_address: email,
            status: "subscribed",
          }),
        }
      );
  
      const data = await response.json();
  
      if (response.ok) {
        return {
          statusCode: 200,
          body: JSON.stringify({ message: "Subscription successful" }),
        };
      } else {
        console.error("Error subscribing user:", data.detail);
        return {
          statusCode: 400,
          body: JSON.stringify({ error: "Failed to subscribe user" }),
        };
      }
    } catch (error) {
      console.error("Error subscribing user:", error.message);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Internal server error" }),
      };
    }
  };
  
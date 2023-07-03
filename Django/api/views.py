import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core import exceptions



@csrf_exempt
def receive_data(request):
    if request.method == "POST":
        try:
            # Retrieve the JSON data from the request body
            data = json.loads(request.body)

            auth_token = request.headers.get('Authorization')
            print(auth_token)
            # Add the condition to check the authorization token
            if auth_token != "d7110028a6e7b225e4b9ebe31bdd091c":
                return JsonResponse({"message": "Invalid token."}, status=401)

            # Validate the data format
            if not isinstance(data, dict):
                raise exceptions.ValidationError("Invalid data format. JSON object expected.")

            # Log the received data (optional)
            print(data)

            # Process the data and return a success response
            global processed_data
            processed_data = process_data(data)
            return JsonResponse({"message": "Data received and processed successfully.", "data": processed_data})
        except json.JSONDecodeError:
            return JsonResponse({"message": "Invalid JSON payload."}, status=400)
        except exceptions.ValidationError as e:
            return JsonResponse({"message": "Validation Error.", "error": str(e)}, status=400)
        except Exception as e:
            return JsonResponse({"message": "An error occurred.", "error": str(e)}, status=500)

    # Return an error response if the request method is not POST
    return JsonResponse({"message": "Invalid request method."}, status=405)

def process_data(data):
    # Implement your data processing logic here
    processed_data = data  # Placeholder. Replace with your actual processing code
    return processed_data




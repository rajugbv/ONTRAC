import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "jobs")
public class Job {
    
    @Id
    private String id;
    private String title;
    private String description;
    private String location;
    private String company;
    
    // Getters and Setters

}

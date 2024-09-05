import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    public Job saveJob(Job job) {
        return jobRepository.save(job);
    }

    public Job updateJob(String id, Job job) {
        Job existingJob = jobRepository.findById(id).orElseThrow(() -> new RuntimeException("Job not found"));
        existingJob.setTitle(job.getTitle());
        existingJob.setDescription(job.getDescription());
        existingJob.setLocation(job.getLocation());
        existingJob.setCompany(job.getCompany());
        return jobRepository.save(existingJob);
    }

    public void deleteJob(String id) {
        jobRepository.deleteById(id);
    }
}
